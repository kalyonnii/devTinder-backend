const  express= require("express");
const { userAuth } = require("../middlewares/auth");
const profileRouter=express.Router();



profileRouter.get("/profile", userAuth, async (req, res) => {
    try {

        // IN MIDDLEWARE I HAVE THIS CODE
        // const cookies = req.cookies;

        // const { token } = cookies;
        // if (!token) {
        //     return res.status(401).send("invalid token");
        // }
        // const decodedMsg = await jwt.verify(token, "Simuleduco@1234")

        // console.log(decodedMsg)

        // const { _id } = decodedMsg;
        // console.log("Logged in User is: " + _id)

        // const user = await User.findById(_id);

        const user = req.user;
        if (!user) {
            return res.status(401).send("user does not exists");
        }
        // console.log(token)
        res.send(user)
    } catch (err) {
        res.status(400).send("Error in Profile: " + err.message)
    }
})

module.exports=profileRouter;