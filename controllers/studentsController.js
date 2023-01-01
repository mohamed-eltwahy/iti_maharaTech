const Studentmodel=require("../models/studentModel");

const getAllStudents=(req, res) => {
    res.json(Studentmodel.fetchAllStudents());

    res.render("students.ejs", { std: Studentmodel.fetchAllStudents() });

};

const getStudentsID= (req, res) => {
    let id = req.params.id;

    const std =  Studentmodel.fetchAllStudents().find((val, index, arr) => {
        return val.id == id;

    });
    if (!std) {

        res.send('student not found!');

    } else
        res.json(std);

};

module.exports={getAllStudents,getStudentsID};