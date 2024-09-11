import React from 'react';
import LineChartComponent from './LineChartComponent';
import PieChartComponent from './PieChartComponent';
import Sidebar from './Sidebar';
import './styles.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <div className="charts">
          <div className="chart">
            <h3>Sales vs Orders</h3>
            <LineChartComponent />
          </div>
          <div className="chart">
            <h3>Portion of Sales</h3>
            <PieChartComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
