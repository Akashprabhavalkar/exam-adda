var express = require("express");
var bodyparser = require("body-parser");
const Students = require("../models/Students");
var jsonparser = bodyparser.json();
const router = express.Router();


router.post("/save", async(req, res) => {
    let body = req.body;
    let students = new Students();
    if (body.data.id != "") {
        students = await Students.findById(body.data.id);
    }
    students.name = body.data.name;
    students.mobile_no = body.data.mobile_no;
    students.test_id = body.data.test_id;
    students.total_marks = body.data.total_marks;
    students.status = body.data.status;

    students.save().then(result => {
        res.end(JSON.stringify(result));
    }, err => {
        res.end(JSON.stringify(err));
    });
});

router.post("/list", async(req, res) => {
    let students = await Students.find();
    res.json({ data: students });
});

router.post("/get", async(req, res) => {
    let body = req.body;

    let students = await Students.findById(body.data.id);
    res.json({ data: students });
});

router.post("/delete", async(req, res) => {
    let body = req.body;

    await Students.findByIdAndDelete(body.data.id);
    let data = {
        "data": {
            "status": "success"
        }
    }
    res.end(JSON.stringify(data));
});

module.exports = router;