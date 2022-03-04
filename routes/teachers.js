var express = require("express");
var bodyparser = require("body-parser");


const Teachers = require("../models/Teachers");
var jsonparser = bodyparser.json();
const router = express.Router();

router.post("/teacherlogin", async(req, res) => {
    let body = req.body;
    let teacher = await Teachers.find().and([{ email: body.data.email }, { password: body.data.password }]);
    let data = {
        "data": {
            "status": "failed"
        }
    }
    if (teacher.length != 0) {
        let authkey = (Math.random() + 1).toString(36).substring(2);

        teacher = await Teachers.findById(teacher[0]._id);
        teacher.authkey = authkey;
        teacher.save();
        data = {
            "data": {
                "status": "success",
                "name": teacher.name,
                "email": teacher.email,
                "mobile_no": teacher.mobile_no,
                "password": teacher.password,
                "authkey": authkey
            }
        }
    }
    res.end(JSON.stringify(data));
});


module.exports = router;