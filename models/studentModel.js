

const fs=require('fs');
const path=require('path');
const studentsPath=path.join(path.dirname(process.mainModule.filename),"data","student.json");
  module.exports=  class Student{
        constructor(id,title){
            this.id=id,tis.title=title
        }

        saveStudent(){
            students.push(this);
        }


      static  fetchAllStudents(){
            return students;
        }

    }