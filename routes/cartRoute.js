const express = require('express');
const router = express.Router();
const {Cart} = require('../models');
const {Product}= require('../models');
const sequelize = require('sequelize');



//Display user's current cart information by userid
router.post("/allitem", async (req, res) => {
    const {userID}=req.body;
    const userCart= await Cart.findAll({ where: { userID: userID}});
    res.json(userCart);
})

//Delete from cart
router.delete("/deleteItem", async (req, res) => {
    const {userId} = req.body;
    const {ProductID} = req.body;
    await Cart.destroy({where:{userId,ProductID}})
    res.json('Success')
})


//Order (Caculate total)
router.get("/cartOrdered", async(req, res)=> {
    try{
        const {userId}= req.body;    
        // const {totalperItem} = await Cart.findAll({
        //     include:[{
        //         model: Product,
        //         required: true
        //     }],
        //     attributes:[
        //         sequelize.literal('Product.Price*quantity','totalperItem'),
        //     ]
        // },
        // {
        //     where: {userId}    
        // })

        // const sum = totalperItem.map(totalperItem => totalperItem.sum).reduce((acc,amount)=>acc + amount)
        const {totalCart} = await Cart.findAll({
             attributes: [
                 [sequelize.fn('sum', sequelize.col('amount'),'totalCart')]
             ]
        })
        req.json(totalCart)
    } catch (err) {console.error(err)}
})




module.exports = router;