'use client';

import React, { useEffect, useState } from 'react';
import SettingsBar from '../../components/settingsbar/settingsbar';
import Link from 'next/link';
import '../styles/order.css';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const userId = 1; 

  /*
  useEffect(() => {
    
    async function fetchOrders() {
      const response = await fetch(`/orders/${userId}`);
      const data = await response.json(); 
      setOrders(data);
    }

    fetchOrders();
  }, []); */

  // Frontend only
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const storedOrders = localStorage.getItem('orders');
        if (storedOrders) {
          setOrders(JSON.parse(storedOrders));
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

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
              <th>Order #</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
        
            {orders.map(order => (
                <tr key={order.id}>
                  <td>Order #{order.id}</td>
                  <td>{new Date(order.date).toLocaleDateString()}</td>
                  <td>${order.total}</td>
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
