const express = require('express');
const router = express.Router();
const {Cart} = require('../models');
const { Op } = require("sequelize");

router.get("/userID=:uid", async (req, res) => {
    const uid = req.params.uid;
    const userCart= await Cart.findAll({ where: { userID: uid}});
    res.json(userCart);
})



router.post("/", async (req, res)=> {
    const addcart = req.body;
    await Cart.create(addcart);
    res.json(addcart);
})


router.get("/test", async (req, res)=> {
    res.json("test");
})

module.exports = router;