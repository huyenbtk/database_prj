const express = require('express');
const app = express.Router();
app.use(express.static("./public"));



app.get("/menu", function (req, res) {
    res.sendFile(__dirname+'/public/menu.html');
});
app.get("/", function (req, res) {
    res.sendFile(__dirname+'/public/index.html');
});

app.get("/", function (req, res) {
    res.sendFile(__dirname+'/public/index.html');
});


module.exports = app