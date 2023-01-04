const express = require('express');
const router=express.Router();
const validator=require('../util/studentsValidator');
const getallStudentsController=require('../controllers/studentControllerDB');



router.get('/:id',getallStudentsController.getStudentById);
// router.set("template engine ", "ejs");

router.get('/', getallStudentsController.getAllStudents);

router.delete('/:id', getallStudentsController.deleteStudentById);

router.put('/:id', getallStudentsController.updateStudent);

///create student

// router.post('/api/Students', (req, res) => {
//     req.body.id = students.length + 1;

//     students.push(req.body);
//     res.json(req.body);


// });

// //delet
// router.delete('/:id', (req, res) => {

//     let idx = students.findIndex((val, _, _) => {
//         return val.id = req.params.id;
//     });
//     if (idx != -1) {

//         students.splice(idx, 1);
//         res.send('student deleted successfully');
//     } else {
//         rmSync.send('student not found');
//     }




// });

// //update

// router.put('/:id', (req, res) => {

//     let idx = students.findIndex((val, _, _) => {
//         return val.id = req.params.id;
//     });

//     if (idx != -1) {
//         for (const i in req.body) {

//             students[idx][i] = req.body[i];
//         }
//         res.json(students[idx]);
//     } else {
//         res.send('student updated successfully');
//     }

// });

module.exports=router;