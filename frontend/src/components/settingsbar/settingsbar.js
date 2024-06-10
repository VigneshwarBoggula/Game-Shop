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
                    <li><Link href="/edit_products">Manage Products</Link></li>
                    <li><Link href="/edit_orders">Manage Articles</Link></li>
                </ul>
            </aside>
        </div>
    );
};

export default SettingsBar;