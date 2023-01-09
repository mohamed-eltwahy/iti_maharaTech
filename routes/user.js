const express = require('express');

const validator = require('../middlewares/userMWValidator');
const { User } = require('../models/userModel');
const bcrypt = require('bcrypt');
const { nextTick } = require('process');
const router = express.Router();

//registeration

router.post('/', validator, async (req, res,next) => {

    try {
        //check already exist
        let user = await User.findOne({
            email: req.body.email
        }).exec();

        if (user)

            return res.status(400).send("User already Registered ...");
        //create new user
        let salt = await bcrypt.genSalt(10);
        let hashedpassword = await bcrypt.hash(req.body.password, salt);
        user = new User({
            email: req.body.email,
            name: req.body.name,
            password: hashedpassword
        });
        await user.save();
        const token = user.generateAuthToken();
        res.header("x-auth-token",token);
        res.status(200).send({
            name: user.name,
            email: user.email
        });
    } catch (err) {
      next(err);
    }


});

module.exports = router;