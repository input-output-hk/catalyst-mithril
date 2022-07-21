import React, { useState, useEffect } from 'react';

/*
 * Code from: https://stackoverflow.com/a/18650828
 */
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export default function SnapshotsList(props) {
  const [snapshots, setSnapshots] = useState([]);

  useEffect(() => {
    if (!props.updateInterval) {
      return;
    }
    
    let fetchSnapshots = () => {
      fetch(`${props.apiPath}/snapshots`)
        .then(response => response.json())
        .then(data => setSnapshots(data))
        .catch(error => {
          console.error(error);
        });
    };
    
    // Fetch them once without waiting
    fetchSnapshots(); 
    
    const interval = setInterval(fetchSnapshots, props.updateInterval);
    return () => clearInterval(interval);
  }, [props.apiPath, props.updateInterval]);

  return (
    <div className={props.className}>
      <h2>Snapshots</h2>
      {Object.entries(snapshots).length === 0
        ? <p>No snapshot available</p>
        :
        <div className="row">
          {snapshots.map((snapshot, index) =>
            <div key={snapshot.digest} className="card margin-right--md margin-bottom--md shadow--md">
              <div className="card__header">
                <h3>
                  {snapshot.digest.slice(0, 24)}
                </h3>
              </div>
              <div className="card__body">
                <div>Certificate hash: <br/> {snapshot.certificate_hash.slice(0, 30)}</div>
                <div>Created at: <br/> {new Date(snapshot.created_at).toLocaleString()}</div>
                <div>Size: {formatBytes(snapshot.size)}</div>
              </div>
              { index === 0 &&
                <div className="card__footer text--right">
                  <span className="badge badge--primary margin-left--sm">Latest</span>
                </div>
              }
            </div>
          )}
        </div>
      }
    </div>
  );
}
