const mongoose = require("mongoose");
//const { MongoDBNamespace } = require("mongoose"/node_modules/mongodb);
const Schema = mongoose.Schema;
const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile_no: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    authkey: {
        type: String,
        required: true
    }
})
const Teachers = mongoose.model("teachers", schema);
module.exports = Teachers;