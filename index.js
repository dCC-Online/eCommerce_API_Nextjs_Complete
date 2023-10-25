const express = require('express');
const app = express();
const products = require("./routes/products")

app.use(express.json());
app.use('/api/products', products)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});