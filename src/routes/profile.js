const express = require("express");
const { userAuth } = require("../middlewares/auth");
const { validateEditProfileData } = require("../utils/validation")
const profileRouter = express.Router();
const validator = require("validator")
const bcrypt = require("bcrypt");
const User = require("../models/user");


profileRouter.get("/profile/view", userAuth, async (req, res) => {
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


profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
    try {
        if (!validateEditProfileData(req)) {
            throw new Error("Invalid edit request ")
        }
        const loggedInUser = req.user;
        // console.log(loggedInUser)

        Object.keys(req.body).forEach(key => (loggedInUser[key] = req.body[key]))
        // console.log(loggedInUser)

        await loggedInUser.save()
        // res.status(200).send(`${loggedInUser.firstName} Proile updated successfully`)
        res.json({
            message: `${loggedInUser.firstName} Proile updated successfully`,
            user: loggedInUser
        })
    }
    catch (err) {
        res.status(400).send("Error in profile edit " + err.message)
    }
})

profileRouter.patch("/profile/password", userAuth, async (req, res) => {
    try {
        const { password, emailId } = req.body;
        const user = await User.findOne({ emailId: emailId })
        if (!user) {
            // throw new Error("EmailId Not  found in DB");
            throw new Error("Invalid credentials");
        }
        const isPasswordValid = validator.isStrongPassword(password);
        if (!isPasswordValid) {
            throw new Error("Please enter strong password")
        }
        const passwordhash = await bcrypt.hash(password, 10)
        const loggedInUser= req.user
        loggedInUser.password = passwordhash
        await loggedInUser.save()
        res.status(200).send(`${loggedInUser.firstName} Password updated successfully`)

    }
    catch (err) {
        res.status(400).send("Error in profile edit password " + err.message)
    }
})
module.exports = profileRouter;