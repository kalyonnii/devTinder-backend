const jwt = require("jsonwebtoken");
const User = require("../models/user");


const userAuth = async (req, res, next) => {

    try {
        const { token } = req.cookies

        if (!token) {
            throw new Error("token is invalid")
        }
        const decodedMsg = await jwt.verify(token, "Simuleduco@1234");
        const { _id } = decodedMsg;
        const user = await User.findById(_id);
        if (!user) {
            throw new Error("user not found")
        }

        req.user = user
        next()
    }
    catch (err) {
        res.status(400).send("Error: " + err.message);
    }
}












// const adminAuth = (req, res, next) => {
//     console.log(
//         "admin auth is getting checked"
//     )
//     const token = "xyz";
//     const isAdminAuthorized = token === "xyz"
//     if (!isAdminAuthorized) {
//         res.status(401).send("Unauthorized")
//     } else {
//         next();
//     }
// }

// const userAuth = (req, res, next) => {
//     console.log(
//         "user auth is getting checked"
//     )
//     const token = "xyz";
//     const isAdminAuthorized = token === "xyz"
//     if (!isAdminAuthorized) {
//         res.status(401).send("Unauthorized")
//     } else {
//         next();
//     }
// }





module.exports = {
    // adminAuth,
    userAuth
}