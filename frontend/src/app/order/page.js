'use client';

import React, { useEffect, useState } from 'react';
import SettingsBar from '../../components/settingsbar/settingsbar';
import Link from 'next/link';
import '../styles/order.css';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const userId = 1; // Replace with the actual user ID

  useEffect(() => {
    async function fetchOrders() {
      const response = await fetch(`/orders/${userId}`);
      const data = await response.json();
      setOrders(data);
    }
    fetchOrders();
  }, []);

  return (
    <div className="order-container">
      <SettingsBar />
      <main>
        <h1>Order History</h1>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Date</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.itemName}</td>
                <td>{new Date(order.date).toLocaleDateString()}</td>
                <td>{order.quantity} item(s)</td>
                <td>${order.total.toFixed(2)}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Order;
