const mongoose = require("mongoose");
//const { MongoDBNamespace } = require("mongoose"/node_modules/mongodb);
const Schema = mongoose.Schema;
const schema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    mobile_: {
        type: String
    },
    authkey: {
        type: String
    }
})
const Authentication = mongoose.model("admins", schema);
module.exports = Authentication;