const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const ejs = require('ejs');
const studentsRouter= require("./routes/students");
const mongoose=require('mongoose');
const userRouter =require('./routes/user');
const authRouter=require("./routes/auth");
mongoose.connect("mongodb://localhost:27017/iti", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // usecreateIndexes:true
}).then(() => { console.log("connect to DB ...") }).catch((err) => { console.log(err) });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(helmet());

app.use("/api/Students",studentsRouter);
app.use('/api/Users',userRouter);
app.use('/api/login',authRouter);

const logging= require('./middlewares/logging');


///custom middleware/////
app.use(logging);


const port = process.env.PORT || 3000;



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/main.html"));
});
app.param('id', (req, res, next, val) => {
    next();
});

app.post('/welcome.html', (req, res) => {
    res.cookie('username', Buffer.from(req.body.fnm).toString('base64'));
    res.cookie('userage', 25, { httpOnly: true });
    res.send(`thanks ${req.body.fnm}`);
});


app.get('/abc', (req, res) => {
    console.log(Buffer.from(req.cookies.username, 'base64').toString());
    console.log(req.cookies.userage);
    res.sendStatus(200);

});

// app.post('', () => {

// });
app.listen(port, () => {
    console.log(`listenning to ${port}`);

});

