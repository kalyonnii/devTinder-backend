const mongoose = require("mongoose");
const validator = require("validator")
const jwt = require("jsonwebtoken")
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 50
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email" + value)
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isStrongPassword(value)) {
                throw new Error("ENTER STRONG PASSWORD: " + value);
            }
        }
    },
    age: {
        type: Number,
        min: 18
    },
    gender: {
        type: String,
        validate(value) {
            if (!["male", "female", "others"].includes(value)) {
                throw new Error("Invalid gender");
            }
        }
    },
    photoUrl: {
        type: String,
        default: "https://www.cgg.gov.in/wp-content/uploads/2017/10/dummy-profile-pic-male1.jpg",
        validate(value) {
            if (!validator.isURL(value)) {
                throw new Error("Invalid URL: " + value);
            }
        }
    },
    about: {
        type: String,
        default: "description of user"
    },
    skills: {
        type: [String]
    }
    // _id: {
    //     type: Number // for id insert 
    // },
},
    {
        timestamps: true
    })

userSchema.methods.getJWT = async function () {
    const user = this;
    const token = await jwt.sign({ _id: user._id }, "Simuleduco@1234", { expiresIn: "1h" });
    return token;
}

userSchema.methods.validatePassword = async function (passswordInputByUser) {
    const user = this;
    const passwordhash = user.password
    const isPasswordValid = await bcrypt.compare(passswordInputByUser, passwordhash);
    return isPasswordValid;
}

const User = mongoose.model("User", userSchema);
module.exports = User; 