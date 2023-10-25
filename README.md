# Express Products API

A basic Express API designed to manage products. This API provides CRUD operations for products and is intended to be used with a Next.js frontend.

## Getting Started

1. **Clone this repository:**
   ```bash
   git clone https://github.com/dCC-Online/eCommerce_API_Nextjs_Complete
   
2. **Open the unzipped folder in VS Code**
   
3. **Install Node Modules:**
   ```bash
   npm install

4. **Start the server:**
   ```bash
   npm start

The server will start and listen on port 5000 by default. You should see the message:
```bash
   Server is running on port 5000
```

## API Endpoints

### Get All Products

- **Endpoint:** `http://localhost:5000/api/products`
- **Method:** `GET`
- **Response:** Array of products

### Get a Product by ID

- **Endpoint:** `http://localhost:5000/api/products/:id`
- **Method:** `GET`
- **Response:** Product object

### Create a New Product

- **Endpoint:** `http://localhost:5000/api/products`
- **Method:** `POST`
- **Body:**
```json
{
  "name": "Product Name",
  "description": "Product Description",
  "price": 100.00,
  "imageUrl": "online/image/url.jpg"
}
```
- **Response:** `Created product object`

### Update a Product by ID

- **Endpoint:** `http://localhost:5000/api/products/:id`
- **Method:** `PUT`
- **Body:**
```json
{
  "name": "Updated Product Name",
  "description": "Updated Product Description",
  "price": 150.00,
  "imageUrl": "path/to/updated-image.jpg"
}
```
- **Response:** `Updated product object`

## Making Requests from Next.js Frontend

- Ensure the server is running using npm start before making requests from your Next.js frontend.
- **Example POST Request:**
```javascript
const productData = {
  name: "New Product",
  description: "This is a new product",
  price: 99.99,
  imageUrl: "path/to/image.jpg"
};

fetch('http://localhost:5000/api/products', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(productData)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```
