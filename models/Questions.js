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
    right_answer: {
        type: String,
        required: true
    },
    wrong_answer: {
        type: String,
        required: true
    }
})
const Questions = mongoose.model("questions", schema);
module.exports = Questions;