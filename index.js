const express = require('express');
const app = express();
const products = require("./routes/products")
const cors = require("cors")
app.use(cors())
app.use(express.json());
app.use('/api/products', products)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});