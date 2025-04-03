const express = require("express");
const { userAuth } = require("../middlewares/auth");
const ConnectionRequest = require("../models/CONNECTIONrEQUEST.JS");
const User = require("../models/user");
const requestRouter = express.Router();

requestRouter.post(
    "/request/send/:status/:toUserId",
    userAuth,
    async (req, res) => {
        try {
            const fromUserId = req.user._id;
            const toUserId = req.params.toUserId;
            const status = req.params.status;
            const allowedStatus = ["interested", "ignored"];
            if (!allowedStatus.includes(status)) {
                return res.status(400).json({
                    message: "Invalid status :" + status
                });
            }

            const toUser = await User.findById(toUserId);
            if (!toUser) {
                return res.status(404).json({ message: "User not found" });
            }
            const connectionRequest = new ConnectionRequest({
                fromUserId,
                toUserId,
                status
            });

            const existingConnectionRequest = await ConnectionRequest.findOne({
                $or: [
                    {
                        fromUserId,
                        toUserId
                    },
                    {
                        fromUserId: toUserId,
                        toUserId: fromUserId
                    }
                ]
            });

            if (existingConnectionRequest) {
                return res
                    .status(400)
                    .json({ message: "connection request already exists" });
            }

            const data = await connectionRequest.save();
            res.status(200).json({
                message: req.user.firstName + " is " + status + " in " + toUser.firstName,
                data
            });
        } catch (err) {
            res.status(400).send("Error" + err.message);
        }
    }
);
module.exports = requestRouter;

// requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {

//     const user = req.user;
//     if (!user) {
//         return res.status(401).send("User does not exists");
//     }
//     console.log("send connection request")
//     res.status(200).send(user.firstName + " sent connection request")
// })
// module.exports=requestRouter;
