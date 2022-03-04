var express = require("express");
var bodyparser = require("body-parser");
const Questions = require("../models/Questions");
var jsonparser = bodyparser.json();
const router = express.Router();


router.post("/save", async(req, res) => {
    let body = req.body;
    let questions = new Questions();
    if (body.data.id != "") {
        questions = await Questions.findById(body.data.id);
    }
    questions.test_id = body.data.test_id;
    questions.question_id = body.data.question_id;
    questions.right_answer = body.data.right_answer;
    questions.wrong_answer = body.data.wrong_answer;


    questions.save().then(result => {
        res.end(JSON.stringify(result));
    }, err => {
        res.end(JSON.stringify(err));
    });
});

router.post("/list", async(req, res) => {
    let questions = await Questions.find();
    res.json({ data: questions });
});

router.post("/get", async(req, res) => {
    let body = req.body;

    let questions = await Questions.findById(body.data.id);
    res.json({ data: questions });
});

router.post("/delete", async(req, res) => {
    let body = req.body;

    await Questions.findByIdAndDelete(body.data.id);
    let data = {
        "data": {
            "status": "success"
        }
    }
    res.end(JSON.stringify(data));
});

module.exports = router;