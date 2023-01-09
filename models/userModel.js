
const mongoose = require('mongoose');
const config = require('config');
const jwt = require('jsonwebtoken');
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
    isAdmin:{
        type:Boolean
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    }
});


userSchema.method("generateAuthToken", function () {
    if(!config.get("jwtsec")) return res.status(500).send("Token not defined ...");
    const token = jwt.sign({ usrid: this._id ,
        adminRole:this.isAdmin
    }, config.get("jwtsec"));
    return token;

});
//create model


exports.User = mongoose.model("user", userSchema);