import React from 'react';

const HealthStatus = ({ healthy, warning, severe }) => {
  return (
    <div className="health-status-container">
      <div className="status-item">
        <span className="status-dot healthy"></span>
        <div>
          <h4>{healthy}</h4>
          <p>Healthy</p>
        </div>
      </div>
      <div className="status-item">
        <span className="status-dot warning"></span>
        <div>
          <h4>{warning}</h4>
          <p>Warning</p>
        </div>
      </div>
      <div className="status-item">
        <span className="status-dot severe"></span>
        <div>
          <h4>{severe}</h4>
          <p>Severe</p>
        </div>
      </div>
    </div>
  );
};
export default HealthStatus;