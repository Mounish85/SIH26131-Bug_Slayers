import React from 'react';
import { detectionHistory } from '../data/detectionHistory';
import SeverityBadge from '../components/SeverityBadge';
import '../styles/global.css';

const History = () => {
  return (
    <div className="page-container">
      <h1>Detection History</h1>
      <div className="card">
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Crop</th>
                <th>Disease / Pest</th>
                <th>Confidence</th>
                <th>Severity</th>
              </tr>
            </thead>
            <tbody>
              {detectionHistory.map(item => (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td>{item.crop}</td>
                  <td>{item.disease}</td>
                  <td>{item.confidence}%</td>
                  <td><SeverityBadge severity={item.severity} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default History;