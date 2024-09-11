import React from 'react';
import './styles.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item active">
        <span role="img" aria-label="dashboard">📊</span> Dashboard
      </div>
      <div className="sidebar-item">
        <span role="img" aria-label="inventory">🏠</span> Inventory
      </div>
      <div className="sidebar-item">
        <span role="img" aria-label="order">📦</span> Order
      </div>
      <div className="sidebar-item">
        <span role="img" aria-label="returns">📤</span> Returns
      </div>
      <div className="sidebar-item">
        <span role="img" aria-label="customers">🧑‍🤝‍🧑</span> Customers
      </div>
      <div className="sidebar-item">
        <span role="img" aria-label="shipping">🚚</span> Shipping
      </div>
      <div className="sidebar-item">
        <span role="img" aria-label="channel">🛍️</span> Channel
      </div>
      <div className="sidebar-item">
        <span role="img" aria-label="integrations">🔗</span> Integrations
      </div>
      <div className="sidebar-item">
        <span role="img" aria-label="reports">📊</span> Reports
      </div>
      <div className="sidebar-item">
        <span role="img" aria-label="account">⚙️</span> Account
      </div>
    </div>
  );
};

export default Sidebar;
