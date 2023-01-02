const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

mongoose.connect('mongodb://localhost:27017/iti', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // usecreateIndexes:true
}).then(() => {
    console.log('database connected .....');
}).catch((err) => {
    console.log(err);
});

//create schema
const studentSchema = new mongoose.Schema({
    fn: {type:String,uppercase:true,trim:true},
    ln: String,
    dept: String,
    // dept: {
        // tyep: String,
        // required: true,
        // enum: ["SD", "SA", "MD"],
        // minlength: 2,
        // maxlength: 6
    // },
    // id: Number
    id: {
        type: Number,
        unique: true,
        required: true
        // min: 30,
        // max: 3000
    }

});
//create model
const Student = mongoose.model("Students", studentSchema);

// student.find().then((data) => {
//     console.log(data);
// });

async function getAllStudents() {
    let resault = await Student.find({});
    console.log(resault);


}

// getAllStudents();

function AddnewStudent(fn, ln, deptt, id) {
    let std = new Student({ fn: fn, ln: ln, dept: deptt, id: id });
    std.save().then((data) => {
        console.log(`saved sucessfully ${data}`);
    }).catch((err) => {

        for (let e in err.errors) {
            console.log(err.errors[e].message);
        }
    })
}

AddnewStudent("ahmed", "ali", "SD", 22);
