var express = require("express");
var bodyparser = require("body-parser");
const Attendance = require("../models/Attendance");
var jsonparser = bodyparser.json();
const router = express.Router();


router.post("/save", async(req, res) => {
    let body = req.body;
    let attendance = new Attendance();
    if (body.data.id != "") {
        attendance = await Attendance.findById(body.data.id);
    }
    attendance.test_id = body.data.test_id;
    attendance.question_id = body.data.question_id;
    attendance.attendance = body.data.attendance;
    attendance.view_right_answer = body.data.view_right_answer;


    attendance.save().then(result => {
        res.end(JSON.stringify(result));
    }, err => {
        res.end(JSON.stringify(err));
    });
});

router.post("/list", async(req, res) => {
    let attendance = await Attendance.find();
    res.json({ data: attendance });
});

router.post("/get", async(req, res) => {
    let body = req.body;

    let attendance = await Attendance.findById(body.data.id);
    res.json({ data: attendance });
});

router.post("/delete", async(req, res) => {
    let body = req.body;

    await Attendance.findByIdAndDelete(body.data.id);
    let data = {
        "data": {
            "status": "success"
        }
    }
    res.end(JSON.stringify(data));
});

module.exports = router;