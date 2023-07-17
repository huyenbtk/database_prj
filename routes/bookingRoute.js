const express = require('express');
const router = express.Router();
const {Cart} = require('../models');
const {Order} = require('../models');
const { Op } = require("sequelize");

const path = require('path');

const publicDir = path.join(__dirname,'..', 'public');
router.use(express.static(publicDir));



router.get("/bookingpage", function (req, res) {
    res.sendFile(path.join(publicDir,'/booking.html'));
});


//Add to cart from booking
router.post("/userID=:id", async (req, res) => {
    const userId = req.params.id;
    const {ProductID,quantity} = req.body;
    const existingCart= await Cart.findAll({ where: { userId}});
    if(existingCart){
        let existingItem = await Cart.findOne({
            where: {userId, ProductID}
        })
        if(existingItem) await Cart.increment({ quantity: + quantity}, {where:{userId, ProductID}})
        else await Cart.create({userId, ProductID, quantity})
    }
    else await Cart.create({userId, ProductID, quantity})
    res.json("Success");
})



//View booking history
router.get("/history/userID=:id", async (req, res)=> {
    const id = req.params.id;
    const order = Order.findAll({where: {userID: id}});
    res.json(order);
})




module.exports = router;