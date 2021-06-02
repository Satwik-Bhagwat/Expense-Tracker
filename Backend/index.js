const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const cors = require("cors");
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const PORT = 5000;
require("dotenv").config();

const User = require('./models/user')
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use('/', router);


mongoose.connect('mongodb://localhost:27017/ET-DB',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log("Mongo db connected")
    })
    .catch(err => {
        console.log("Mongo db connection error")
        console.log(err)
    })





router.post("/signUpData", function (req, res) {
    User.find({ username: req.body.username }, function (err, user) {
        if (user.length > 0)
            res.json({ success: false, message: "Username already exists" })
        else {
            const hashpassword = bcrypt.hashSync(req.body.password, 10);
            const new_user = new User();
            new_user.username = req.body.username;
            new_user.email = req.body.email;
            new_user.password = hashpassword;

            new_user.save((err, user) => {
                if (err)
                    res.json({ success: false, message: "error" })
                else
                    res.json({ success: true, message: "Account created" })
            })
        }
    })
})


router.post("/LoginData", function (req, res) {
    User.find({ username: req.body.username }, function (err, user) {
        if (user.length > 0) {
            if (bcrypt.compareSync(req.body.password, user[0].password)) {
                const token = jwt.sign({ id: user[0]._id, }, process.env.SECRET);
                res.send({
                    token: token,
                    user: { id: user[0]._id },
                    message: "Login successful",
                    success: true
                })
            }
            else {
                res.send({ success: false, message: "Wrong password", wrongPassword: true })
            }

        }
        else {
            res.send({ success: false, message: "Account not found, Sign up before Login" })
        }
    })
})


router.post("/TokenIsValid", function (req, res) {
    const token = req.body.token;
    if (!token) return res.json({ success: false, message: "Token does not exist" })

    const verify = jwt.verify(token, process.env.SECRET);
    if (!verify) return res.json({ sucess: false, message: "Invalid token" });

    User.find({ _id: verify.id }, function (err, user) {
        if (user.length > 0)
            res.json({
                success: true,
                message: "verified",
                user: {
                    username: user[0].username,
                    email: user[0].email,
                    id: verify.id
                }
            })
        else
            res.json({ success: false, message: "not verified" })
    })
})


router.post("/spendData", function (req, res) {
    const data = req.body.data;
    const userid = req.body.id;
    User.findOneAndUpdate(
        { _id: userid },
        { $push: { spends: data } },
        function (error, success) {
            if (error)
                console.log(error)
            else
                res.json({ success: true, message: "Added to database" })
        })
})

router.post("/getData", function (req, res) {
    const id = req.body.id;
    User.find({ _id: id }, function (err, user) {
        res.json(user[0].spends)
    })
})

router.post("/deleteSpend", function (req, res) {
    const itemId = req.body.itemid;
    const userId = req.body.userid;
    User.findOneAndUpdate(
        { _id: userId },
        { $pull: { spends: { _id: itemId } } },
        { 'new': true },
        function (error, success) {
            if (error)
                console.log(error)
            else
                res.json({ success: true, message: "Deleted spend in database" })

        }
    )
})


app.listen(PORT, () => {
    console.log("Server running on PORT: " + PORT);
})