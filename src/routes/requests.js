const express= require("express");
const { userAuth } = require("../middlewares/auth");
const requestRouter= express.Router();


requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {

    const user = req.user;
    if (!user) {
        return res.status(401).send("User does not exists");
    }
    console.log("send connection request")
    res.status(200).send(user.firstName + " sent connection request")
})
module.exports=requestRouter;