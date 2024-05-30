'use client';

import React from 'react';
import Link from 'next/link';
import './settingsbar.css';

const SettingsBar = () => {
    return (
        <div className="sidebar">
            <aside>
                <ul>
                    <li><Link href="/account">Account Settings</Link></li>
                    <li><Link href="/order">Order History</Link></li>
                    <li><Link href="/edit_products">Product Inventory</Link></li>
                    <li><Link href="/edit_articles">Article Catalog</Link></li>
                    <li><Link href="/view_inqueries">View Inqueries</Link></li>
                </ul>
            </aside>
        </div>
    );
};

export default SettingsBar;