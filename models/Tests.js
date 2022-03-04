const mongoose = require("mongoose");
//const { MongoDBNamespace } = require("mongoose"/node_modules/mongodb);
const Schema = mongoose.Schema;
const schema = new Schema({
    teacher_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    instruction: {
        type: String,
        required: true
    },
    wrong_answer: {
        type: String,
        required: true
    },
    right_answer: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    count: {
        type: String,
        required: true
    }
})
const Tests = mongoose.model("tests", schema);
module.exports = Tests;