const {verify} = require("jsonwebtoken");


const Authenticated = (req, res, next) => {
    const accessToken = req.header("accessToken");
    if (!accessToken) return res.json({ error: "User not logged in!"})
    try{
        const validToken = verify(accessToken,"secret");
        if (validToken) {
            return next();
        }
    } catch (err) {return res.json({ error: err})}
}

const Authorized = (req, res, next) => {
    const adminToken = req.header("adminToken");
    if (!adminToken) return res.json({ error: "You dont have permission!"})
    try{
        const validToken = verify(adminToken,"secret");
        if (validToken) {
            return next();
        }
    } catch (err) {return res.json({ error: err})}
}
module.exports ={Authenticated, Authorized}  