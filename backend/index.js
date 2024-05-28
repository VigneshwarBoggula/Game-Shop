// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Example endpoint to fetch data
app.get('/api/data', (req, res) => {
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
  res.json(data);
});

// Endpoint to handle form submission
app.post('/api/submit', (req, res) => {
  const formData = req.body;
  // Process the form data (e.g., save to database)
  res.json({ message: 'Form submitted successfully', formData });
});

// Serve static files from the Next.js build folder
app.use(express.static(path.join(__dirname, '../frontend/build')));

// All other requests should be handled by Next.js
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
