require('dotenv').config();
const express = require('express')
const app = express()
app.use(express.json())
const db = require('./models')
let port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("./public"));

app.use("/users", require('./routes/userRoute'));
app.use("/menu", require('./routes/menuRoute'));
app.use("/admin",require('./routes/adminRoute'));

app.get("/", function (req, res) {
    res.sendFile(__dirname+'/public/index.html');
});




app.get("/users/signup", function (req, res) {
    res.sendFile(__dirname+'/public/signup.html');
});



db.sequelize.sync().then(()=>{
    app.listen(port, () => {
        console.log('Server running on port ' + port)
    })
})


