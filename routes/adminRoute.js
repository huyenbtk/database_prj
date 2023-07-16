const express = require('express');
const router = express.Router();
const {Product}= require('../models');
const {user} = require('../models');


//See users list
router.get('/', async (req, res) => {
    const userlist = await user.findAll();
    res.json(userlist);
});


//Add product
router.post('/productlist',async (req, res)=> {
    const productadd = req.body;
    await Product.create(productadd);
    res.json(productadd);
})


//See product list
router.get('/productlist', async (req, res) => {
    const productlist = await Product.findAll();
    res.json(productlist);
});


module.exports = router