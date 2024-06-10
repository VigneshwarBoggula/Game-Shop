"use client";

import React, { useState, useEffect } from 'react';
import SettingsBar from '../../components/settingsbar/settingsbar';
import Link from 'next/link';
import axios from 'axios';

import '../styles/edit_products.css';

const ProductsPage = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', image: '', price: '', description: '', stock: '', category: '' });
  const [updateProduct, setUpdateProduct] = useState({ id: '', name: '', image: '', price: '', description: '', stock: '', category: '' });
  const [error, setError] = useState('');

  // Fetch products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/products`);
        setProducts(response.data.reverse());
      } catch (error) {
        setError('Error fetching data');
      }
    };

    fetchData();
  }, []);

  // Create product
  const createProduct = async (e) => {
    e.preventDefault();
    try {
      // Ensure price is a float and stock is an integer
      const productToAdd = {
        ...newProduct,
        price: parseFloat(newProduct.price),
        stock: parseInt(newProduct.stock, 10),
      };

      const response = await axios.post(`${apiUrl}/products`, productToAdd);
      setProducts([response.data, ...products]);
      setNewProduct({ name: '', image: '', price: '', description: '', stock: '', category: '' });
    } catch (error) {
      setError('Error creating product');
    }
  };

  // Update product
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      // Ensure price is a float and stock is an integer
      const productToUpdate = {
        ...updateProduct,
        price: parseFloat(updateProduct.price),
        stock: parseInt(updateProduct.stock, 10),
      };

      await axios.put(`${apiUrl}/products/${productToUpdate.id}`, productToUpdate);
      setUpdateProduct({ id: '', name: '', image: '', price: '', description: '', stock: '', category: '' });
      setProducts(
        products.map((product) => {
          if (product.id === parseInt(productToUpdate.id, 10)) {
            return { ...product, ...productToUpdate };
          }
          return product;
        })
      );
    } catch (error) {
      setError('Error updating product');
    }
  };

  // Delete product
  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`${apiUrl}/products/${productId}`);
      setProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      setError('Error deleting product');
    }
  };

  return (
    <div className="edit-products-container">
      <SettingsBar />
      <div className="product-boxes">
        <h1 className="product-management-header">Product Management</h1>

        {/* Error display */}
        {error && <div className="error-message">{error}</div>}

        {/* Create product */}
        <form onSubmit={createProduct} className="create-product">
          <input
            placeholder="Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <input
            placeholder="Image URL"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          />
          <input
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
          <input
            placeholder="Description"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          />
          <input
            placeholder="Stock"
            value={newProduct.stock}
            onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
          />
          <input
            placeholder="Category"
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
          />
          <button type="submit" className="add-product-button">
            Add Product
          </button>
        </form>
        <hr />
        {/* Update product */}
        <form onSubmit={handleUpdateProduct} className="update-product">
          <input
            placeholder="Product ID"
            value={updateProduct.id}
            onChange={(e) => setUpdateProduct({ ...updateProduct, id: e.target.value })}
          />
          <input
            placeholder="New Name"
            value={updateProduct.name}
            onChange={(e) => setUpdateProduct({ ...updateProduct, name: e.target.value })}
          />
          <input
            placeholder="New Image URL"
            value={updateProduct.image}
            onChange={(e) => setUpdateProduct({ ...updateProduct, image: e.target.value })}
          />
          <input
            placeholder="New Price"
            value={updateProduct.price}
            onChange={(e) => setUpdateProduct({ ...updateProduct, price: e.target.value })}
          />
          <input
            placeholder="New Description"
            value={updateProduct.description}
            onChange={(e) => setUpdateProduct({ ...updateProduct, description: e.target.value })}
          />
          <input
            placeholder="New Stock"
            value={updateProduct.stock}
            onChange={(e) => setUpdateProduct({ ...updateProduct, stock: e.target.value })}
          />
          <input
            placeholder="New Category"
            value={updateProduct.category}
            onChange={(e) => setUpdateProduct({ ...updateProduct, category: e.target.value })}
          />
          <button type="submit" className="update-product-button">
            Update Product
          </button>
        </form>
        <hr />
        {/* Display products */}
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-info"><strong>ID:</strong> {product.id}</div>
              <div className="product-info"><strong>Name:</strong> {product.name}</div>
              <div className="product-info"><strong>Price:</strong> ${product.price}</div>
              <div className="product-info"><strong>Description:</strong> {product.description}</div>
              <div className="product-info"><strong>Stock:</strong> {product.stock}</div>
              <div className="product-info"><strong>Category:</strong> {product.category}</div>
              <div className="product-info"><strong>Image:</strong> <img src={product.image} alt={product.name} className="product-image" /></div>
              <button onClick={() => deleteProduct(product.id)} className="delete-product-button">
                Delete Product
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
