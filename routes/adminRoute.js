const express = require('express');
const router = express.Router();
const {Product}= require('../models');
const {user} = require('../models');
const path = require('path');

const publicDir = path.join(__dirname,'..','public');
router.use(express.static(publicDir));


router.get("/adminpage", function (req, res) {
    res.sendFile(path.join(publicDir,'admin.html'));
});

//See users list
router.get('/userlist', async (req, res) => {
    const userlist = await user.findAll();
    res.json(userlist);
});

//Delete user from userlist
router.delete('/userlist', async (req, res) => {
    const {userId} = req.body;
    await user.destroy({where: {userId: userId}});
    res.json("Delete success")
})


//Add product
router.post('/productlist',async (req, res)=> {
    const productadd = req.body;
    await Product.create(productadd);
    res.json(productadd);
})


//See product list
router.get('/productlist', async (req, res) => {
    const productlist = await Product.findAll();
    res.json(productlist);
});




module.exports = router