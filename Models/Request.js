const mongoose = require("mongoose");

const RequestSchema = mongoose.Schema({
    requestId: {
        type: String,
        unique: true},
    requetsStatus:String,
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'},
    officeId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Offices'},
     
})

module.exports = mongoose.model("Request", RequestSchema);

