require('dotenv').config(); 
const express = require('express')
const app = express()
const db = require('./models')
let port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static("./public"));

app.use("/users", require('./routes/userRoute'));
app.use("/menu", require('./routes/menuRoute'));
app.use("/booking",require('./routes/bookingRoute'));
app.use("/cart", require('./routes/cartRoute'));
app.use("/admin", require('./routes/adminRoute'));


app.get("/home", function (req, res) {
    res.sendFile(__dirname+'/public/index.html');
});




db.sequelize.sync().then(()=>{
    app.listen(port, () => {
        console.log('Server running on port ' + port)
    })
})


