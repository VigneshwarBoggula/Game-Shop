"use client";

import { useState, useEffect } from 'react';
import SettingsBar from '../../components/settingsbar/settingsbar';
import Link from 'next/link';
import axios from 'axios';

import '../styles/view_inqueries.css';

const ContactsPage = () => {
  return (
    <div className="view-inquieries-container">
        <SettingsBar />
        <div><p>View All Inquiries Here</p></div>
    </div>
  );
};

export default ContactsPage;
