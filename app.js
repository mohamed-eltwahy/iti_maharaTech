const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

mongoose.connect('mongodb://localhost:27017/iti', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('database connection .....');
}).catch((err) => {
    console.log(err);
});

//create schema
const studentSchema = new mongoose.Schema({
    fn:String,
    ln:String,
    dept:String,
    id:Number

});
//create model
const student=mongoose.model("students",studentSchema);

