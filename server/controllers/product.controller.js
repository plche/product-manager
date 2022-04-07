const Product = require('../models/product.model');

const readAllProducts = (request, response) => {
    Product.find()
        .then(allProducts => response.status(200).json(allProducts))
        .catch(err => {
            response.statusMessage = `Hubo un error al ejecutar la búsqueda: ${err}`;
            return response.status(400).end();
        });
}

const createProduct = (request, response) => {
    Product.create(request.body)
        .then(createdProduct => response.status(201).json(createdProduct))
        .catch(err => {
            console.log(err);
            response.statusMessage = `Hubo un error al ejecutar el insert: ${err}`;
            return response.status(400).json(err);
        });
}

const ProductController = {
    readAllProducts,
    createProduct
}

module.exports = ProductController;
