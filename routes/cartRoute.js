const express = require('express');
const router = express.Router();
const {Cart} = require('../models');
const {Authenticated, Authorized} = require('../middlewares/auth.js');


//Display current cart information by UID
router.get("/userID=:id", Authenticated, async (req, res) => {
    const id = req.params.id;
    const userCart= await Cart.findAll({ where: { userID: id}});
    res.json(userCart);
})


//Delete from cart


module.exports = router;