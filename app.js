const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs=require("ejs");
// const path=require("path");
const app = express();

app.set("view engine","ejs");

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/college', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected to mongodb");
    }).catch((err) => {
        console.log("Error occured", err);
    });

const Schema = mongoose.Schema;

const dataSchema = Schema({
    name: String,
    email: String,
    phone: Number,
    password: String,
});
const applicationSchema=Schema({
    name:String,
    fname:String,
    contact:Number,
    dob:Date,
    mail:String,
    aadhar:Number
});
const paymentSchema=Schema({
    name:String,
    email:String,
    status:Number
});

var register = mongoose.model("studentdata", dataSchema);
var application=mongoose.model("applicationdata",applicationSchema);
var payment=mongoose.model("paymentdata",paymentSchema); 

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
    // res.render('index');
});

app.get("/login", function (req, res) {
    res.sendFile(__dirname + "/login.html");
});

app.get("/payment", function (req, res) {
    res.sendFile(__dirname + "/payment.html");
});

app.get("/application", function (req, res) {
    res.sendFile(__dirname + "/application_form.html");
});

app.get("/home", function (req, res) {
    res.sendFile(__dirname + "/home.html");
});

app.get("/success", function (req, res) {
    res.sendFile(__dirname + "/success.html");
});

app.get("/register", function (req, res) {
    res.sendFile(__dirname + "/newuser.html");
});

var name,email,phone;

app.post("/register", async (req, res) => {
    const registerdata = new register({
        name: req.body.uname,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.crepassword
    });
    email=req.body.email;
    name=req.body.uname;
    phone = req.body.phone;

    await registerdata.save();
    console.log("Data saved");
    // res.sendFile(__dirname + "/home.html");
    res.redirect("/home");
});

app.post('/setData',(req,res)=>{
    var data = {
        "name":name,
        "email":email,
        "phone":phone
    }
    console.log(data);

    res.send(data);
});

app.post("/login", async (req, res) => {
    try {
        const password = req.body.password;
        const logindata = await register.findOne({ email: req.body.user });
        if (logindata.password === password) {
            res.sendFile(__dirname + "/home.html");
        }
        else {
            console.log("Invalid details1");
        }
    }
    catch (err) {
        console.log("Invalid details2");
    }
});

app.post("/application",async function(req,res){
    const applicationdata=new application({
        name:req.body.aname,
        fname:req.body.fname,
        contact:req.body.cnumber,
        dob:req.body.DOB,
        mail:req.body.email,
        aadhar:req.body.aadhar
    });
    await applicationdata.save();
    console.log("Application data saved");
    res.sendFile(__dirname + "/success.html");
});

app.post("/payment",async function(req,res){
    const paymentdata=new payment({
        name:req.body.firstname,
        email:req.body.email,
        status:1
    });
    await paymentdata.save();
    console.log("Payment data saved");
    res.sendFile(__dirname+"/success.html");
});


app.listen(4000);