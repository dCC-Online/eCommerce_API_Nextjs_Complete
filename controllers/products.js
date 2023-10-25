const fs = require("fs");
const filePath = "data.json";

function getAll() {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

function getById(id) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        const products = JSON.parse(data);
        const product = products.find((p) => p.id === parseInt(id));
        if (!product) {
          reject(`Product with id '${id}' not found.`);
        } else {
          resolve(product);
        }
      }
    });
  });
}

function updateById(id, update) {
  id = parseInt(id);
  return new Promise((resolve, reject) => {
    if (!update.name || !update.description || !update.price || !update.imageUrl) {
      reject("Invalid update data. Must include 'name', 'description', 'price', and 'imageUrl' keys.");
    }
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        let products = JSON.parse(data);
        let productIndex = products.findIndex((p) => p.id === id);
        if (productIndex === -1) {
          reject(`Product with id '${id}' not found.`);
        } else {
          products[productIndex] = { id, ...update };
          fs.writeFile(filePath, JSON.stringify(products), (error) => {
            if (error) {
              reject(error);
            } else {
              resolve(update);
            }
          });
        }
      }
    });
  });
}

function create(product) {
  return new Promise((resolve, reject) => {
    if (!product.name || !product.description || !product.price || !product.imageUrl) {
      reject("Invalid product data. Must include 'name', 'description', 'price', and 'imageUrl' keys.");
    }
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        let products = JSON.parse(data);
        product.id = parseInt(products.length + 1);
        products.push(product);
        fs.writeFile(filePath, JSON.stringify(products), (error) => {
          if (error) {
            reject(error);
          } else {
            resolve(product);
          }
        });
      }
    });
  });
}

function deleteById(id) {
  id = parseInt(id);
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        let products = JSON.parse(data);
        let productIndex = products.findIndex((p) => p.id === id);
        if (productIndex === -1) {
          reject(`Product with id '${id}' not found.`);
        } else {
          let deletedProduct = products.splice(productIndex, 1);
          fs.writeFile(filePath, JSON.stringify(products), (error) => {
            if (error) {
              reject(error);
            } else {
              resolve(deletedProduct);
            }
          });
        }
      }
    });
  });
}

module.exports = {
  getAll,
  getById,
  updateById,
  create,
  deleteById,
};
