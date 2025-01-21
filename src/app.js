const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth.");

const app = express();

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
app.use("/admin", adminAuth)
// app.use("/user", userAuth)




app.use("/admin/getallData", (req, res) => {

    res.send("all data sent")

})
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
app.post("/user/login", (req, res) => {
    res.send("user loggedin")
})
app.get("/admin/deleteuser", (req, res) => {
    res.send("Delete a user")
})
app.listen(7777, () => {
    console.log("Server is running on port 7777");
})