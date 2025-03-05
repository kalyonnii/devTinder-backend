const validator = require("validator")
const validationSignUp = (req) => {
    const { firstName, lastName, emailId, password } = req.body;
    if (!firstName || !lastName) {
        throw new Error("Name is required")
    } else if (!validator.isEmail(emailId)) {
        throw new Error("Invalid Email")
    }
    else if (!validator.isStrongPassword(password)) {
        throw new Error("Enter strong Password ")
    }
}
module.exports = {
    validationSignUp,
}