'use client';

import React from 'react';
import '../styles/order.css';

const Order = () => {
  return (
    <div className="container">
      <aside>
        <ul>
          <li><a href="#account.html">Account Settings</a></li>
          <li><a href="order.html">Order History</a></li>
        </ul>
      </aside>
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
            <tr>
              <td>Xbox One S</td>
              <td>2024-05-01</td>
              <td>1 item</td>
              <td>$449.99</td>
              <td>Shipped</td>
            </tr>
            <tr>
              <td>GTA 5</td>
              <td>2024-04-25</td>
              <td>1 item</td>
              <td>$59.99</td>
              <td>Delivered</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Order;