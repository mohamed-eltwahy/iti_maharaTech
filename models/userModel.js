
const mongoose = require('mongoose');
// const valid = require('validator');
//create user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // validate: {
        //     validator: (val) => {
        //         return valid.isEmail(val);

        //     },
        //     message:"is not valid email"
        // }
    },
    password: {
        type: String,
        required: true,
        minlength:5
    }
});

//create model


exports.User=  mongoose.model("user",userSchema);