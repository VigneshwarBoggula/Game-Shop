"use client";

import { useState, useEffect } from 'react';
import SettingsBar from '../../components/settingsbar/settingsbar';
import Link from 'next/link';
import axios from 'axios';

const ProductsPage = () => {
  return (
    <div className="container">
        <aside>
            <ul>
                <li><Link href="/account">Account Settings</Link></li>
                <li><Link href="/order">Order History</Link></li>
                <li><Link href="/edit_products">Product Inventory</Link></li>
                <li><Link href="/edit_articles">Article Catalog</Link></li>
                <li><Link href="/view_inqueries">View Inqueries</Link></li>
            </ul>
        </aside>
        <p>Products</p>
    </div>
  );
};

export default ProductsPage;
