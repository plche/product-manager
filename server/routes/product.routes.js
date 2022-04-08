const express = require('express');
const ProductRouter = express.Router();
const ProductController = require('../controllers/product.controller');

ProductRouter.get('/read/all', ProductController.readAllProducts);
ProductRouter.get('/read/:id', ProductController.readOneSingleProduct);
ProductRouter.post('/create', ProductController.createProduct);
ProductRouter.put('/update/:id', ProductController.updateExistingProduct);
ProductRouter.delete('/delete/:id', ProductController.deleteAnExistingProduct);

module.exports = ProductRouter;
