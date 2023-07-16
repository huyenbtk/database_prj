const express = require('express');
const router = express.Router();
const {Cart} = require('../models');
const {Order} = require('../models');
const { Op } = require("sequelize");


//Add to cart from booking
router.post("/userID=:id", async (req, res) => {
    const id = req.params.id;
    const userOrder= await Order.findAll({ where: { userID: id}});
    res.json(userOrder);
})


//View booking history
router.post("/history/userID=:id", async (req, res)=> {
    const addcart = req.body;
    await Cart.create(addcart);
    res.json(addcart);
})




module.exports = router;