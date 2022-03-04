const mongoose = require("mongoose");
//const { MongoDBNamespace } = require("mongoose"/node_modules/mongodb);
const Schema = mongoose.Schema;
const schema = new Schema({
    test_id: {
        type: String,
        required: true
    },

    question_id: {
        type: String,
        required: true
    },
    attendance: {
        type: String,
        required: true
    },
    view_right_answer: {
        type: String,
        required: true
    }
})
const Attendance = mongoose.model("attendance", schema, "attendance");
module.exports = Attendance;