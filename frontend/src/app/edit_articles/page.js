"use client";

import { useState, useEffect } from 'react';
import SettingsBar from '../../components/settingsbar/settingsbar';
import axios from 'axios';

const ArticlesPage = () => {
  return (
    <div>
        <SettingsBar />
        <p>Edit Articles Here</p>
    </div>
  );
};

export default ArticlesPage;
