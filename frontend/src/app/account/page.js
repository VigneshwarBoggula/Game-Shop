'use client';

import React, { useState } from 'react';
import SettingsBar from '../../components/settingsbar/settingsbar';
import Link from 'next/link';
import '../styles/account.css';

const AccountSettings = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        birthDate: '',
        phoneNumber: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const { firstName, lastName, birthDate, phoneNumber, email } = formData;
        if (!firstName || !lastName || !birthDate || !phoneNumber || !email) {
            alert('Please fill in all fields.');
            return false;
        }
        return true;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form is valid, submit data...');
            alert('Settings saved successfully!');
        }
    };

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
            <main>
                <section id="my-details">
                    <h1>Account Settings</h1>
                    <form onSubmit={handleFormSubmit}>
                        <label htmlFor="first-name">First Name</label>
                        <input 
                            type="text" 
                            id="first-name" 
                            name="firstName" 
                            value={formData.firstName} 
                            onChange={handleChange} 
                        />
                        
                        <label htmlFor="last-name">Last Name</label>
                        <input 
                            type="text" 
                            id="last-name" 
                            name="lastName" 
                            value={formData.lastName} 
                            onChange={handleChange} 
                        />
                        
                        <label htmlFor="birth-date">Birth Date</label>
                        <input 
                            type="date" 
                            id="birth-date" 
                            name="birthDate" 
                            value={formData.birthDate} 
                            onChange={handleChange} 
                        />
                        
                        <label htmlFor="phone-number">Phone Number</label>
                        <input 
                            type="tel" 
                            id="phone-number" 
                            name="phoneNumber" 
                            value={formData.phoneNumber} 
                            onChange={handleChange} 
                        />
                        
                        <label htmlFor="email">E-mail address</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                        />
                        
                        <button type="submit">Save</button>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default AccountSettings;
