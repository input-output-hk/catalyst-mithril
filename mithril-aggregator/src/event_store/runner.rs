use slog_scope::{debug, info};
use sqlite::Connection;
use tokio::sync::mpsc::UnboundedReceiver;

use std::sync::{Arc, Mutex};

use super::{EventMessage, EventPersister};

/// EventMessage receiver service.
pub struct EventStore {
    receiver: UnboundedReceiver<EventMessage>,
}

impl EventStore {
    /// Instanciate the EventMessage receiver service.
    pub fn new(receiver: UnboundedReceiver<EventMessage>) -> Self {
        Self { receiver }
    }

    /// Launch the service. It runs until all the transmitters are gone and all
    /// messages have been processed. This means this service shall be waited
    /// upon completion to ensure all events are properly saved in the database.
    pub async fn run(&mut self, db_dsn: &str) -> Result<(), Box<dyn std::error::Error>> {
        let connection = Arc::new(Mutex::new(Connection::open(db_dsn)?));
        let persister = EventPersister::new(connection);
        info!("monitoring: starting event loop to log messages.");
        loop {
            if let Some(message) = self.receiver.recv().await {
                debug!("Event received: {message:?}");
                let event = persister.persist(message)?;
                debug!("event ID={} created", event.event_id);
            } else {
                info!("No more events to proceed, quitting…");
                break;
            }
        }

        Ok(())
    }
}
