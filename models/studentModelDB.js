//require mongoose
const mongoose = require("mongoose");
//set connection


//create schema
const studentSchema2=new mongoose.Schema({
    fn:{
        type:String,
        required:true,
        trim:true
    },
    ln:{
        type:String,
        required:true,
        trim:true
    },
    dept:{
        type:String,
        required:true,
        default:"SD"


    },
    id:{
        type:Number,
        required:true,
    }
});

//create model
const Student=mongoose.model(
    "Students",studentSchema2
);

module.exports=Student;
