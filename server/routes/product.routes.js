const express = require('express');
const ProductRouter = express.Router();
const ProductController = require('../controllers/product.controller');

ProductRouter.get('/read/all', ProductController.readAllProducts);
ProductRouter.post('/create', ProductController.createProduct);

module.exports = ProductRouter;