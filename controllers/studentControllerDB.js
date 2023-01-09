const Student = require('../models/studentModelDB');
const asyncFunction = require('../middlewares/async');


//create student

let addNewStudent = (req, res,nxt) => {
    let std = new Student({
        fn: req.body.fn, ln: req.body.ln, dept: req.body.dept, id: req.body.id
    });
    std.save().then((data) => { res.status(200).send(data) }).catch((err) => {
        nxt(err);
    })
}

//getStudentById

let getStudentById = async (req, res,next) => {
    try {
        let std = await Student.findById(req.params.id);

        if (!std) return res.status(404).send("student with this id not found!");

        res.send(std);
    } catch (err) {
        // console.log(err.toString());
        next(err);
    }
}

//getAllStudents
let getAllStudents = asyncFunction(async (req, res) => {

    let std = await Student.find().select({ fn: 1, ln: 1, id1 }).sort({ id: -1 });

    res.send(std);

})

//updateStudents
let updateStudent = async (req, res) => {

    let std = await Student.findOneAndUpdate(req.params.id, req.body, { returnOriginal: false });

    if (!std) return std.status(404).send('updated user id not found');
    res.save(std);
}
//deletStudent

let deleteStudentById = async (req, res) => {
    let std = await Student.findAndRemove(req.params.id);
    if (!std) return std.status(404).send('deleted user id not found');
    res.save(std);
}

module.exports = {
    addNewStudent,
    getStudentById,
    getAllStudents,
    updateStudent,
    deleteStudentById
}