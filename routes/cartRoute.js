const express = require('express');
const router = express.Router();
const {Cart} = require('../models');
const {Authenticated, Authorized} = require('../middlewares/auth.js');


//Display user's current cart information by userid
router.get("/userID=:id", Authenticated, async (req, res) => {
    const id = req.params.id;
    const userCart= await Cart.findAll({ where: { userID: id}});
    res.json(userCart);
})

//Delete from cart
router.delete("/userID=:id", async (req, res) => {
    const userId = req.params.id;
    const {ProductID} = req.body;
    await Cart.destroy({where:{userId,ProductID}})
    res.json('Success')
})


//Order (Caculate )


//Delete from cart


module.exports = router;