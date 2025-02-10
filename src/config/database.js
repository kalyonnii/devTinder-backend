const mongoose = require("mongoose")

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://namastedev:namastedev123@namastenode.edk5r.mongodb.net/devTinder", {
    
    }
    );
}

module.exports = connectDB;
// connectDB().then(() => {
//     console.log("Database connection established")
// }).catch((err) => {
//     console.error("Database cannot be connected")
// })