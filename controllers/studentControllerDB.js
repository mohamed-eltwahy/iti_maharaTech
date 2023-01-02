const Student = require('../models/studentModelDB');


//create student

let addNewStudent = (req, res) => {
    let std = new Student({
        fn: req.body.fn, ln: req.body.ln, dept: req.body.dept, id: req.body.id
    });
    std.save().then((data) => { res.status(200).send(data) }).catch((err) => {

        for (let e in err.errors) {
            console.log(err.errors[e].message);
            res.status(400).send('Bad request');
        }

    })
}

//getStudentById

//getAllStudents

//updateStudents

//deletStudent