const express = require('express');
const router = express.Router();
const {user} = require('../models');
const path = require('path');

const publicDir = path.join(__dirname,'..', 'public');
router.use(express.static(publicDir));



router.get('/', async (req, res) => {
    const userlist = await user.findAll();
    res.json(userlist);
});


router.get("/signin", function (req, res) {
    res.sendFile(path.join(publicDir,'/signin.html'));
});

router.get("/signup", function (req, res) {
    res.sendFile(path.join(publicDir,'/signup.html'));
});


router.post('/signup', async (req, res) => {
    const {username,email,password,name,address,phone,permission} = req.body;
    const regUser = await user.findOne({where: {email: email}})
    if (regUser) res.json({error: "Email already registered"})
    else {
        let regnameUser = await user.findOne({where: {username: username}})
        if (regnameUser) res.json({error: "Username already taken"})
        else{
            await user.create({
                username: username,
                email: email,
                password: password,
                name: name,
                address: address,
                phone: phone,
                permission: permission
            });
            res.json("user added");
        }
    }   
})

router.post('/signin', async (req, res) => {
    const {username, password} = req.body;
    const logUser = await user.findOne({where: {username: username}})
    if (!logUser) res.json({error: "User doesn't exist"});
    else{
        if (password===logUser.password) res.json ("SUCCESS")
        else res.json({error: "Incorrect password"});
    }    
})


router.get('/userID=:id', async (req, res)=> {
    const id = req.params.id;
    const getuser = await user.findAll({where: {id: id}});
    res.json(getuser);
})



module.exports = router
