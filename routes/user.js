const express = require('express');

const validator = require('../middlewares/userMWValidator');
const { User } = require('../models/userModel');
const bcrypt=require('bcrypt');
const router = express.Router();

//registeration

router.post('/', validator, async (req, res) => {

    try {
        //check already exist
        let user = await User.findOne({
            email: req.body.email
        }).exec();

        if (user)

            return res.status(400).send("User already Registered ...");
        //create new user
        let salt=await bcrypt.genSalt(10);
        let hashedpassword=await bcrypt.hash(req.body.password,salt);
        user=new User({
            email:req.body.email,
            name:req.body.name,
            password:hashedpassword
        });
        await user.save();
        res.status(200).send({
            name:user.name,
            email:user.email
        });
    } catch (err) {
        console.log(err.toString());
        for (let e in err.errors) {
            console.log(err.errors[e].message);
            res.status(400).send('bad Request ...');
        }
    }


});

module.exports = router;