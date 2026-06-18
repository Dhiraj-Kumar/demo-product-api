const express = require('express');
const productRoutes = require('./routes/products');

const app = express();
const PORT = 9000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/products', productRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Products API is running'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API Documentation:`);
  console.log(`GET    http://localhost:${PORT}/api/products - Get all products`);
  console.log(`GET    http://localhost:${PORT}/api/products/:id - Get product by ID`);
  console.log(`POST   http://localhost:${PORT}/api/products - Create new product`);
  console.log(`PUT    http://localhost:${PORT}/api/products/:id - Update product`);
  console.log(`DELETE http://localhost:${PORT}/api/products/:id - Delete product`);
});

module.exports = app;
