const express = require("express");
const router = express.Router();
const {
  getAll,
  getById,
  updateById,
  create,
  deleteById,
} = require("../controllers/products.js");

// Get all products
router.get("/", async (req, res) => {
  try {
    let results = await getAll();
    console.log(results);
    return res.status(200).send(results);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

// Get a product by ID
router.get("/:id", async (req, res) => {
  try {
    let result = await getById(req.params.id);
    console.log(result);
    return res.status(200).send(result);
  } catch (error) {
    console.error(error);
    return res.status(404).send({ message: `Product with id '${req.params.id}' not found.` });
  }
});

// Create a new product
router.post("/", async (req, res) => {
  try {
    let result = await create(req.body);
    console.log(result);
    return res.status(201).send(result);
  } catch (error) {
    console.error(error);
    return res.status(400).send({ message: "Invalid product data." });
  }
});

// Update a product by ID
router.put("/:id", async (req, res) => {
  try {
    let result = await updateById(req.params.id, req.body);
    console.log(result);
    return res.status(200).send(result);
  } catch (error) {
    console.error(error);
    return res.status(400).send({ message: `Product with id '${req.params.id}' not found or invalid update data.` });
  }
});

// Delete a product by ID
router.delete("/:id", async (req, res) => {
  try {
    await deleteById(req.params.id);
    console.log(`Deleted product with id: ${req.params.id}`);
    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(404).send({ message: `Product with id '${req.params.id}' not found.` });
  }
});

module.exports = router;
