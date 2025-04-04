const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth");
const requestRouter = require("./routes/requests");
const profileRouter = require("./routes/profile");

const app = express();
app.use(express.json());
app.use(cookieParser())


app.use("/", authRouter)
app.use("/", profileRouter)
app.use("/", requestRouter)



// app.post("/signup", async (req, res) => {
//     // const userObj={
//     //     firstName:"K",
//     //     lastName:"JOHN",
//     //     emailId:"hdjfbd@gmail.com",
//     //     password:"65456456456",
//     //     // _id:3434343
//     // }
//     console.log(req.body);
//     const userObj = new User(req.body);
//     try {
//         const user = new User(userObj);
//         await user.save();
//         res.send("User Addedd Successfully.....");
//     } catch (err) {
//         console.log(err);
//         res.status(400).send("Error in Creating User :" + err.message);
//     }
// });







//get user by email
app.get("/user", async (req, res) => {
    console.log(req.body);
    const userEmail = req.body.emailId;
    try {
        //    const users = await User.find({emailId:userEmail}) //Return one user to the match
        const users = await User.findOne({
            emailId: userEmail
        }); //Return all the user to the match
        if (users.length === 0) {
            res.status(404).send("User Not Found");
        } else {
            res.send(users);
        }
    } catch (err) {
        res.status(400).send("user fetching error ");
    }
});

app.get("/feed", async (req, res) => {
    try {
        const feed = await User.find({});
        res.send(feed);
    } catch (err) {
        res.status(400).send("Error in fetching Feed");
    }
});
//GET USER
app.get("/getbyid", async (req, res) => {
    try {
        // const id = req.body.id
        const user = await User.findById(3434343);
        res.send(user);
    } catch (err) {
        console.log(err);
        res.status(400).send("Error in fetching user by id");
    }
});
//DELETE USER
app.delete("/userdelete", async (req, res) => {
    try {
        const id = req.body.id;
        // const user =await User.findByIdAndDelete(id);
        const user = await User.findByIdAndDelete({
            _id: id
        });
        res.status(200).send("User delted successfully");
    } catch (err) {
        res.status(400).send("Error in deleting user", err.message);
    }
});

//UPDATE USER

app.patch("/user/:userId", async (req, res) => {
    // const UserId = req.body.userId;
    const UserId = req.params.userId;
    const data = req.body;

    try {
        const ALLOWED_UPDATES = ["userId", "photoUrl", "gender", "age", "skills"];
        const isUpdateAllowed = Object.keys(data).every(k =>
            ALLOWED_UPDATES.includes(k)
        );
        if (!isUpdateAllowed) {
            // res.status(400).send("Update not allowed");
            throw new Error("update not allowed");
        }
        if (data?.skills.length > 10) {
            throw new Error("Skills cannot be more than 10");
        }
        const user = await User.findByIdAndUpdate(UserId, data, {
            returnDocument: "after",
            runValidators: true
        });
        console.log(user);
        res.status(200).send("user updated successfully");
    } catch (err) {
        console.log(err);
        res.status(400).send("Error in updating user" + err.message);
    }
});
connectDB()
    .then(() => {
        console.log("Database connection established");
        app.listen(7777, () => {
            console.log("Server is running on port 7777");
        });
    })
    .catch(err => {
        console.error("Database cannot be connected");
    });

// app.listen(7777, () => {
//     console.log("Server is running on port 7777");
// })

// this will match all the HTTP method  API calls to /test
// app.use("/test", (req, res) => {
//     res.send("Hello from the server")
// })
// app.use("/hello/2", (req, res) => {
//     res.send("oyyyyy")
// })
// app.use("/hello", (req, res) => {
//     res.send("Hello Hello Hello")
// })

// app.use("/", (req, res) => {
//     res.send("Hello from the Dashboard")
// })

// app.use("/user",(req,res)=>{
//     res.send("HAHAHAHAHAHAHAAHHA")
// })
//This will only handle GET call to /user
// app.get("/user", (req, res) => {
//     res.send({ firstname: "kara", lastname: "bunny" })
// })
// app.post("/user", (req, res) => {
//     res.send("Data successfully saved to the database")
// })

// app.delete("/user", (req, res) => {
//     res.send("deleted successfully")
// })

// app.get("/user/:userId/:name/:password", (req, res) => {
//     console.log(req.params)
//     res.send({ firstname: "kara", lastname: "bunny" })
// })

// app.use("/user", [
//     (req, res, next) => {
//         //route handler 1
//         console.log("reponse1 from console");
//         next();
//         // res.send("HAHAHAHAHAHAHAAHHA 1")
//     }, (req, res, next) => {
//         //route handler 2
//         console.log("reponse2 from console");
//         // res.send("HAHAHAHAHAHAHAAHHA 2")
//         next();
//     }],
//     (req, res, next) => {
//         //route handler 3
//         console.log("reponse3 from console");
//         // res.send("HAHAHAHAHAHAHAAHHA 3")
//         next();
//     },
//     (req, res, next) => {
//         //route handler 4
//         console.log("reponse4 from console");
//         // res.send("HAHAHAHAHAHAHAAHHA 4")
//         next();
//     },
//     (req, res, next) => {
//         //route handler 5
//         console.log("reponse5 from console");
//         res.send("HAHAHAHAHAHAHAAHHA 5")
//     })

// app.use("/user",
//     (req, res, next) => {
//         //route handler 1
//         console.log("reponse1 from console");
//         // res.send("HAHAHAHAHAHAHAAHHA 1")
//         next();
//     },
// )
// app.use("/user",
//     (req, res, next) => {
//         //route handler 2
//         console.log("reponse2 from console");
//         res.send("HAHAHAHAHAHAHAAHHA 2")
//     },
// )

// app.get("/user",
//     (req, res, next) => {
//         //route handler 1
//         console.log("reponse1 from console");
//         // res.send("HAHAHAHAHAHAHAAHHA 1")
//         next();
//     },
// )
// app.get("/user",
//     (req, res, next) => {
//         //route handler 2
//         console.log("reponse2 from console");
//         res.send("HAHAHAHAHAHAHAAHHA 2")
//         // next();
//     },
// )

//handle auth middleware  for all request  GET, POST .... ALL requests
// app.use("/admin", adminAuth)
// app.use("/user", userAuth)

// app.use("/admin/getallData", (req, res) => {

//     res.send("all data sent")

// })
// app.get("/admin/getallData", (req, res) => {
//     //logic of checking if the request is authorized
//     const token = "xyz";
//     const isAdmin = token === "xyz"
//     if (isAdmin) {
//         res.send("all data sent")
//     }
//     else {
//         res.status(401).send("Unauthorized")
//     }
// })
// app.use("/user", userAuth, (req, res) => {
//     res.send("user data sent")
// })
// app.post("/user/login", (req, res) => {
//     res.send("user loggedin")
// })
// app.get("/admin/deleteuser", (req, res) => {
//     res.send("Delete a user")
// })

// app.use("/",(err, req,res,next)=>{
//     if(err){
//         //log your error message
//         res.status(500).send("something went wrong")
//     }
// })

// app.get("/getUserData", (req, res) => {
//     //logic of some db call and get user data
//     // try{
//         throw new Error("something error ")
//         res.send("user data sent")
//     // }
//     // catch(err){
//     //     res.status(500).send("some error occured contact support team ")
//     // }

// })
// app.use("/",(err, req,res,next)=>{
//     if(err){
//         //log your error message
//         res.status(500).send("something went wrong")
//     }
// })