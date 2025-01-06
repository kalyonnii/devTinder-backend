const express = require("express");

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

app.get("/user/:userId/:name/:password", (req, res) => {
    console.log(req.params)
    res.send({ firstname: "kara", lastname: "bunny" })
})
app.listen(7777, () => {
    console.log("Server is running on port 7777");
})