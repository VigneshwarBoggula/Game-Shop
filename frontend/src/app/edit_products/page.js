"use client";

import { useState, useEffect } from 'react';
import SettingsBar from '../../components/settingsbar/settingsbar';
import axios from 'axios';

const ProductsPage = () => {
  return (
    <div>
        <SettingsBar />
        <p>Products</p>
    </div>
  );
};

export default ProductsPage;
