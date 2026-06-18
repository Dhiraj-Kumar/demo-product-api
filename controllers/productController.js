let products = require('../data/products');

// GET all products
exports.getAllProducts = (req, res) => {
  res.json(products);
};

// GET product by ID
exports.getProductById = (req, res) => {
  const { id } = req.params;
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
};

// CREATE product
exports.createProduct = (req, res) => {
  const { name, price, description } = req.body;

  if (!name || !price || !description) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newProduct = {
    id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
    name,
    price,
    description
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
};

// UPDATE product
exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  Object.assign(product, req.body);
  res.json(product);
};

// DELETE product
exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  const index = products.findIndex(p => p.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

  const deleted = products.splice(index, 1);
  res.json(deleted[0]);
};

// Helper function for testing - get all products as data
exports.getProducts = () => products;

// Helper function for testing - add product directly
exports.addProduct = (product) => {
  const newProduct = {
    id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
    ...product
  };
  products.push(newProduct);
  return newProduct;
};
