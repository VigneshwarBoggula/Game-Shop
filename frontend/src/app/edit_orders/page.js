"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import SettingsBar from '../../components/settingsbar/settingsbar';

import '../styles/edit_orders.css';

const OrderPage = () => {
  const [newArticle, setNewArticle] = useState({ title: '', content: '' });
  const [editArticle, setEditArticle] = useState({ id: null, title: '', content: '' });
  
  const articles = [
    {
      id: 1,
      title: 'MW3 Article',
      content: 'Content of MW3 Article...',
    },
    {
      id: 2,
      title: 'PlayStation Article',
      content: 'Content of PlayStation Article...',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewArticle({ ...newArticle, [name]: value });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditArticle({ ...editArticle, [name]: value });
  };

  const addArticle = () => {
    const newId = articles.length + 1;
    articles.push({ id: newId, ...newArticle });
    setNewArticle({ title: '', content: '' });
  };

  const updateArticle = () => {
    const index = articles.findIndex(article => article.id === editArticle.id);
    if (index !== -1) {
      articles[index] = editArticle;
      setEditArticle({ id: null, title: '', content: '' });
    }
  };

  const startEditArticle = (article) => {
    setEditArticle(article);
  };

  return (
    <div className="edit-articles-container">
      <SettingsBar />
      <div className="edit-articles-sub-container">
        <h2>Edit Articles Here</h2>

        <h3>Add New Article</h3>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newArticle.title}
          onChange={handleInputChange}
        />
        <textarea
          name="content"
          placeholder="Content"
          value={newArticle.content}
          onChange={handleInputChange}
        />
        <button onClick={addArticle}>Add Article</button>

        <h3>Edit Article</h3>
        {editArticle.id && (
          <div>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={editArticle.title}
              onChange={handleEditChange}
            />
            <textarea
              name="content"
              placeholder="Content"
              value={editArticle.content}
              onChange={handleEditChange}
            />
            <button onClick={updateArticle}>Update Article</button>
          </div>
        )}

        <h3>Articles</h3>
        <ul>
          {articles.map(article => (
            <li key={article.id}>
              <h4>{article.title}</h4>
              <p>{article.content}</p>
              <button onClick={() => startEditArticle(article)}>Edit</button>
              <button onClick={() => deleteArticle(article.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderPage;
