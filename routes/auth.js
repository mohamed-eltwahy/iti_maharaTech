const express = require("express");
const router = express.Router();
const validator = require("../middlewares/authMWValidator");
const { User } = require('../models/userModel');
const bcrypt = require('bcrypt');



router.post('/', validator, async (req, res) => {
    //check email
    let user = await User.findOne({ email: req.body.email }).exec();
    if (!user) return res.status(400).send("invalid email or password...");


    //check password

    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword) return res.status(400).send("invalid email or password...");
    // if(!config.get("jwtsec")) return res.status(500).send("Token not defined ...");
    // const token = user.generateAuthToken();
    // res.header("x-auth-token",token);



    res.status(200).send("logged in successful");
});


module.exports = router;
