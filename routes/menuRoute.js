const express = require('express');
const router = express.Router();
const {Product} = require('../models');
const { Op } = require("sequelize");

router.get('/', async (req, res) => {
    const productlist = await Product.findAll();
    res.json(productlist);
});

router.get('/search', async (req,res)=>{
    const {productname, price} = req.body;  
    const productlist = await Product.findAll({
        where: {
            [Op.or]:[
                {name:{[Op.like]:'%'+productname+'%'}},
                {price:{[Op.like]:'%'+price+'%'}}
            ]
        }
    });
    res.json(productlist);
})



module.exports = router
