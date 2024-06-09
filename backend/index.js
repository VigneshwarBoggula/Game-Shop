const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

// json
app.use(express.json());

// cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// test api
app.get('/test', (req, res) => {
  try {
    res.status(200).json({ message: 'API is working' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* Product */
// get all products
app.get('/products', async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get product by id
app.get('/products/:id', async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get products by category - videogames
app.get('/products/category/videogames', async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        category: 'videogames',
      },
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get products by category - consoles
app.get('/products/category/consoles', async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        category: 'consoles',
      },
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get products by category - accessories
app.get('/products/category/accessories', async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        category: 'accessories',
      },
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// create product
app.post('/products', async (req, res) => {
  try {
    const product = await prisma.product.create({
      data: {
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        description: req.body.description,
        stock: req.body.stock,
        category: req.body.category
      },
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update product
app.put('/products/:id', async (req, res) => {
  try {
    const product = await prisma.product.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        description: req.body.description,
        stock: req.body.stock,
        category: req.body.category
      },
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete product
app.delete('/products/:id', async (req, res) => {
  try {
    const product = await prisma.product.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* Order */
// TODO
// Get all orders by user ID
app.get('/orders/:userId', async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      where: {
        userId: Number(req.params.userId),
      },
    });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new order
app.post('/orders', async (req, res) => {
  try {
    const order = await prisma.order.create({
      data: {
        itemName: req.body.itemName,
        date: new Date(req.body.date),
        quantity: req.body.quantity,
        total: req.body.total,
        status: req.body.status,
        userId: req.body.userId,
      },
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update an order status
app.put('/orders/:id', async (req, res) => {
  try {
    const order = await prisma.order.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        status: req.body.status,
      },
    });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete an order
app.delete('/orders/:id', async (req, res) => {
  try {
    const order = await prisma.order.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));