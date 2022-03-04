const mongoose = require("mongoose");
//const { MongoDBNamespace } = require("mongoose"/node_modules/mongodb);
const Schema = mongoose.Schema;
const schema = new Schema({
    name: {
        type: String,
        required: true
    },

    mobile_no: {
        type: String,
        required: true
    },
    test_id: {
        type: String,
        required: true
    },
    total_marks: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})
const Students = mongoose.model("students", schema);
module.exports = Students;