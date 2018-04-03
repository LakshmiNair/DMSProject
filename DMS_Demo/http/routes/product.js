const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');

const router = express.Router();

function create({ productService }) {
    router.get('/', asyncWrapper(async (req, res) => {
        const products = await productService.getAllProducts();
        res.json(products);
    }));

    // TODO: Install middleware to validate the input
    router.post('/', asyncWrapper(async (req, res) => {
        const product = req.body;
        await productService.createProduct(product);
        // TODO: Fix the response
        res.json({});
    }));

    return router;
}

module.exports.create = create;
