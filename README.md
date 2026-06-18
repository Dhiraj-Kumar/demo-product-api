# Products REST API

A minimal Express.js REST API for managing products with CRUD operations.

## Project Structure

```
deploy-app/
├── app.js                      # Main application entry point
├── package.json               # Project dependencies
├── routes/
│   └── products.js           # Product routes definitions
├── controllers/
│   └── productController.js   # Product business logic
└── data/
    └── products.js           # Sample product data
```

## Setup

### Installation

```bash
npm install
```

### Running the Application

```bash
npm start
```

The server will run on `http://localhost:9000`

## API Endpoints

### 1. Get All Products
- **Method**: GET
- **URL**: `/api/products`
- **Response**: List of all products

```bash
curl http://localhost:9000/api/products
```

### 2. Get Product by ID
- **Method**: GET
- **URL**: `/api/products/:id`
- **Response**: Single product object

```bash
curl http://localhost:9000/api/products/1
```

### 3. Create New Product
- **Method**: POST
- **URL**: `/api/products`
- **Body** (JSON):
```json
{
  "name": "Product Name",
  "description": "Product description",
  "price": 99.99,
  "quantity": 10
}
```

```bash
curl -X POST http://localhost:9000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Headphones","description":"Wireless headphones","price":149.99,"quantity":20}'
```

### 4. Update Product
- **Method**: PUT
- **URL**: `/api/products/:id`
- **Body** (JSON): Any field to update

```bash
curl -X PUT http://localhost:9000/api/products/1 \
  -H "Content-Type: application/json" \
  -d '{"price":899.99,"quantity":5}'
```

### 5. Delete Product
- **Method**: DELETE
- **URL**: `/api/products/:id`

```bash
curl -X DELETE http://localhost:9000/api/products/1
```

## Sample Products

The API comes with 4 sample products:
- Laptop (ID: 1)
- Mouse (ID: 2)
- Keyboard (ID: 3)
- Monitor (ID: 4)

## Notes

- All data is stored in memory and will be reset when the server restarts
- Product IDs are auto-generated
- Required fields: `name` and `price`
