const express = require('express');
const router = express.Router();
const {Product}= require('../models');

router.post('/',async (req, res)=> {
    const productadd = req.body;
    await Product.create(productadd);
    res.json(productadd);
})

router.get('/list', async (req, res) => {
    const productlist = await Product.findAll();
    res.json(productlist);
});


module.exports = router