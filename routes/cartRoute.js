const express = require('express');
const router = express.Router();
const {Cart} = require('../models');
const {Product}= require('../models');
const sequelize = require('sequelize');
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


//Order (Caculate total)
router.get("/cartOrderedUserID=:id", async(req, res)=> {
    try{
        const userId= req.params.id;    
        const {totalperItem} = await Cart.findAll({
            include:[{
                model: Product,
                required: true
            }],
            attributes:[
                sequelize.literal('Product.Price*quantity','totalperItem'),
            ]
        },
        {
            where: {userId}    
        })

        const sum = totalperItem.map(totalperItem => totalperItem.sum).reduce((acc,amount)=>acc + amount)
        // const {totalCart} = await Cart.findAll({
        //     attributes: [
        //         [sequelize.fn('sum', sequelize.col('amount'),'totalCart')]
        //     ]
        // })
        req.json(sum)
    } catch (err) {console.error(err)}
})


//Delete from cart


module.exports = router;