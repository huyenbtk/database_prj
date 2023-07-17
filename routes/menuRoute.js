const express = require('express');
const router = express.Router();
const {Product} = require('../models');
const { Op } = require("sequelize");
const path = require('path');

const publicDir = path.join(__dirname,'..', 'public');
router.use(express.static(publicDir));



router.get("/menupage", function (req, res) {
    res.sendFile(path.join(publicDir,'/menu.html'));
});


//Display menu

router.get('/', async (req, res) => {
    const productlist = await Product.findAll();
    res.json(productlist);
});


//Search by product name or price

router.get("/searchProductName", async (req,res)=>{
    res.sendFile(path.join(publicDir,'/searchProductName.html'));
})

router.post('/api/searchProductName', async (req,res)=>{
    const {productname} = req.body;
    const productlist = await Product.findAll({
        where:
                {Name:{[Op.like]:'%'+productname+'%'}}, 
    })
    res.json(productlist);
})



module.exports = router
