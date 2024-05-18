import React, { useState } from 'react';
import './account.css';

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
        <div>
            <nav>
                <div className="logo">
                    <a href="../home/index.html">GameShop</a>
                </div>
                <div className="nav-links">
                    <a href="../home/index.html">Home</a>
                    <div className="dropdown">
                        <a href="#" className="dropbtn">Products</a>
                        <div className="dropdown-content">
                            <a href="../products/videogames.html">Video Games</a>
                            <a href="../products/consoles.html">Consoles</a>
                            <a href="../products/accessories.html">Accessories</a>
                        </div>
                    </div>
                    <a href="../press/press.html">Press & Reviews</a>
                    <a href="../contact/contact.html">Contact</a>
                </div>
                <div className="icons">
                    <a href="../cart/cart.html">
                        <img src="../../../public/cart_icon.png" alt="Cart" />
                    </a>
                    <a href="../account/account.html">
                        <img src="../../../public/account_icon.png" alt="Account" />
                    </a>
                </div>
            </nav>

            <div className="container">
                <aside>
                    <ul>
                        <li><a href="#account.html">Account Settings</a></li>
                        <li><a href="order.html">Order History</a></li>
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
        </div>
    );
};

export default AccountSettings;
