var express = require("express");
var bodyparser = require("body-parser");
const Tests = require("../models/Tests");
var jsonparser = bodyparser.json();
const router = express.Router();


router.post("/save", async(req, res) => {
    let body = req.body;
    let tests = new Tests();
    console.log(body);
    console.log(tests);
    if (body.data.id != "") {
        tests = await Tests.findById(body.data.id);
    }
    tests.teacher_id = body.data.teacher_id;
    tests.title = body.data.title;
    tests.instruction = body.data.instruction;
    tests.wrong_answer = body.data.wrong_answer;
    tests.right_answer = body.data.right_answer;
    tests.status = body.data.status;
    tests.count = body.data.count;


    tests.save().then(result => {
        res.end(JSON.stringify(result));
    }, err => {
        res.end(JSON.stringify(err));
    });
});

router.post("/list", async(req, res) => {
    let tests = await Tests.find();
    res.json({ data: tests });
});

router.post("/get", async(req, res) => {
    let body = req.body;

    let tests = await Tests.findById(body.data.id);
    res.json({ data: tests });
});

router.post("/delete", async(req, res) => {
    let body = req.body;

    await Tests.findByIdAndDelete(body.data.id);
    let data = {
        "data": {
            "status": "success"
        }
    }
    res.end(JSON.stringify(data));
});

module.exports = router;