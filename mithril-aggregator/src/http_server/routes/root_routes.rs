use crate::DependencyContainer;
use mithril_common::entities::SignedEntityTypeDiscriminants;
use serde::{Deserialize, Serialize};
use std::{collections::BTreeSet, sync::Arc};
use warp::Filter;

use super::middlewares;

#[derive(Debug, Serialize, Deserialize, PartialEq)]
pub struct RootRouteMessage {
    pub open_api_version: String,
    pub documentation_url: String,
    pub capabilities: AggregatorCapabilities,
}

#[derive(Debug, Serialize, Deserialize, PartialEq)]
pub struct AggregatorCapabilities {
    pub signed_entity_types: BTreeSet<SignedEntityTypeDiscriminants>,
}

pub fn routes(
    dependency_manager: Arc<DependencyContainer>,
) -> impl Filter<Extract = (impl warp::Reply,), Error = warp::Rejection> + Clone {
    root(dependency_manager)
}

/// GET /
fn root(
    dependency_manager: Arc<DependencyContainer>,
) -> impl Filter<Extract = (impl warp::Reply,), Error = warp::Rejection> + Clone {
    warp::path::end()
        .and(middlewares::with_api_version_provider(
            dependency_manager.clone(),
        ))
        .and(middlewares::with_signed_entity_config(dependency_manager))
        .and_then(handlers::root)
}

mod handlers {
    use std::{convert::Infallible, sync::Arc};

    use slog_scope::{debug, warn};
    use warp::http::StatusCode;

    use mithril_common::api_version::APIVersionProvider;
    use mithril_common::entities::SignedEntityConfig;

    use crate::http_server::routes::reply::json;
    use crate::http_server::routes::root_routes::{AggregatorCapabilities, RootRouteMessage};
    use crate::unwrap_to_internal_server_error;

    /// Root
    pub async fn root(
        api_version_provider: Arc<APIVersionProvider>,
        signed_entity_config: SignedEntityConfig,
    ) -> Result<impl warp::Reply, Infallible> {
        debug!("⇄ HTTP SERVER: root");

        let open_api_version = unwrap_to_internal_server_error!(
            api_version_provider.compute_current_version(),
            "root::error"
        );

        Ok(json(
            &RootRouteMessage {
                open_api_version: open_api_version.to_string(),
                documentation_url: env!("CARGO_PKG_HOMEPAGE").to_string(),
                capabilities: AggregatorCapabilities {
                    signed_entity_types: signed_entity_config
                        .list_allowed_signed_entity_types_discriminants(),
                },
            },
            StatusCode::OK,
        ))
    }
}

#[cfg(test)]
mod tests {
    use crate::http_server::SERVER_BASE_PATH;
    use crate::{initialize_dependencies, DependencyContainer};
    use mithril_common::test_utils::apispec::APISpec;
    use serde_json::Value::Null;
    use std::collections::BTreeSet;
    use std::sync::Arc;
    use warp::http::Method;
    use warp::http::StatusCode;
    use warp::test::request;
    use warp::Filter;

    use super::*;

    fn setup_router(
        dependency_manager: Arc<DependencyContainer>,
    ) -> impl Filter<Extract = (impl warp::Reply,), Error = warp::Rejection> + Clone {
        let cors = warp::cors()
            .allow_any_origin()
            .allow_headers(vec!["content-type"])
            .allow_methods(vec![Method::GET, Method::POST, Method::OPTIONS]);

        warp::any()
            .and(warp::path(SERVER_BASE_PATH))
            .and(routes(dependency_manager).with(cors))
    }

    #[tokio::test]
    async fn test_root_route_ok() {
        let method = Method::GET.as_str();
        let path = "/";
        let mut dependency_manager = initialize_dependencies().await;
        dependency_manager
            .signed_entity_config
            .allowed_discriminants = BTreeSet::from([
            SignedEntityTypeDiscriminants::MithrilStakeDistribution,
            SignedEntityTypeDiscriminants::CardanoImmutableFilesFull,
            SignedEntityTypeDiscriminants::CardanoTransactions,
        ]);
        let expected_open_api_version = dependency_manager
            .api_version_provider
            .clone()
            .compute_current_version()
            .unwrap()
            .to_string();

        let response = request()
            .method(method)
            .path(&format!("/{SERVER_BASE_PATH}{path}"))
            .reply(&setup_router(Arc::new(dependency_manager)))
            .await;

        let response_body: RootRouteMessage = serde_json::from_slice(response.body()).unwrap();

        assert_eq!(response.status(), StatusCode::OK);

        assert_eq!(
            response_body,
            RootRouteMessage {
                open_api_version: expected_open_api_version,
                documentation_url: env!("CARGO_PKG_HOMEPAGE").to_string(),
                capabilities: AggregatorCapabilities {
                    signed_entity_types: BTreeSet::from_iter([
                        SignedEntityTypeDiscriminants::CardanoTransactions,
                        SignedEntityTypeDiscriminants::CardanoImmutableFilesFull,
                        SignedEntityTypeDiscriminants::MithrilStakeDistribution,
                    ])
                }
            }
        );

        APISpec::verify_conformity(
            APISpec::get_all_spec_files(),
            method,
            path,
            "application/json",
            &Null,
            &response,
            &StatusCode::OK,
        )
        .unwrap();
    }
}
