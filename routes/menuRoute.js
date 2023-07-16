const express = require('express');
const router = express.Router();
const {Product} = require('../models');
const { Op } = require("sequelize");


//Display menu

router.get('/', async (req, res) => {
    const productlist = await Product.findAll();
    res.json(productlist);
});


//Search by product name or price

router.get('/searchProductName=:productname', async (req,res)=>{
    const productname = req.params.productname;
    const productlist = await Product.findAll({
        where:
                {name:{[Op.like]:'%'+productname+'%'}}, 
    })
    res.json(productlist);
})



module.exports = router
