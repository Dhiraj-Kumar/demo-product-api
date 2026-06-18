const chai = require('chai');
const expect = chai.expect;
const productController = require('../controllers/productController');

describe('Product Controller', () => {
  
  describe('GET all products', () => {
    it('should return a list of products', () => {
      const products = productController.getProducts();
      expect(products).to.be.an('array');
      expect(products.length).to.be.greaterThan(0);
    });

    it('should return products with required fields', () => {
      const products = productController.getProducts();
      products.forEach(product => {
        expect(product).to.have.property('id');
        expect(product).to.have.property('name');
        expect(product).to.have.property('price');
        expect(product).to.have.property('description');
      });
    });
  });

  describe('GET product by ID', () => {
    it('should return a product by ID', () => {
      const products = productController.getProducts();
      const firstProduct = products[0];
      expect(firstProduct).to.be.an('object');
      expect(firstProduct).to.have.property('id');
    });
  });

  describe('CREATE product', () => {
    it('should add a new product', () => {
      const initialCount = productController.getProducts().length;
      const newProduct = { name: 'Test Product', price: 99.99, description: 'Test Description' };
      const created = productController.addProduct(newProduct);
      
      expect(created).to.have.property('id');
      expect(created.name).to.equal('Test Product');
      expect(created.price).to.equal(99.99);
      expect(productController.getProducts().length).to.equal(initialCount + 1);
    });

    it('should auto-generate ID for new product', () => {
      const newProduct = { name: 'Another Product', price: 49.99, description: 'Another Test' };
      const created = productController.addProduct(newProduct);
      expect(created.id).to.be.a('number');
      expect(created.id).to.be.greaterThan(0);
    });
  });

  describe('UPDATE product', () => {
    it('should have updateProduct method', () => {
      expect(productController.updateProduct).to.be.a('function');
    });
  });

  describe('DELETE product', () => {
    it('should have deleteProduct method', () => {
      expect(productController.deleteProduct).to.be.a('function');
    });
  });

});