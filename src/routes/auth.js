const express = require("express");
const {
    validationSignUp
} = require("../utils/validation");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const authRouter =express.Router();

authRouter.post("/signup", async (req, res) => {
    //validate data 
    try {
        validationSignUp(req)
        //encrypt the password 
        const { firstName, lastName, emailId, password } = req.body;
        const passwordhash = await bcrypt.hash(password, 10);
        console.log(passwordhash)
        //create a new instance 
        const user = new User({
            firstName,
            lastName,
            emailId,
            password: passwordhash
        })
        await user.save();
        res.send("User Addedd Successfully.....");
    } catch (err) {
        console.log(err);
        res.status(400).send("Error in Creating User :" + err.message);
    }
});




authRouter.post("/login", async (req, res) => {
    try {
        const { emailId, password } = req.body;

        const user = await User.findOne({ emailId: emailId })
        if (!user) {
            // throw new Error("EmailId Not  found in DB");
            throw new Error("Invalid credentials");
        }
        // const isPassword = await bcrypt.compare(password, user.password)

        const isPassword = await user.validatePassword(password)
        if (isPassword) {

            // const token = jwt.sign({ _id: user._id }, "Simuleduco@1234", { expiresIn: '1h' })

            const token = await user.getJWT();
            // res.cookie("token", "dajfgcahaxskjhdiuj8574567465846343564687dfajfhchjgdh")
            res.cookie("token", token, {
                expires: new Date(Date.now() + 1 * 3600000) //expires in  1 hours
            })


            res.status(200).send("Login Successfull");
        } else {
            // throw new Error("password is incorrect")
            throw new Error("Invalid credentials");
        }
    }
    catch (err) {
        res.status(400).send("Error in Login: " + err.message);
    }
})


authRouter.post("/logout", async(req,res)=>{
    res.cookie("token",null, {
        expires:new Date(Date.now())
    })
    res.send("Logout successfull")
})

module.exports=authRouter;