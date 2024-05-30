"use client";

import { useState, useEffect } from 'react';
import SettingsBar from '../../components/settingsbar/settingsbar';
import axios from 'axios';

const ContactsPage = () => {
  return (
    <div>
        <SettingsBar />
        <p>View All Inqueries Here</p>
    </div>
  );
};

export default ContactsPage;
