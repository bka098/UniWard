const mongoose = require("mongoose");

const RequestSchema = mongoose.Schema({
    RequestID: String,
    RequetsStatus:String,
    UserID:{type: mongoose.Schema.Types.ObjectId,
        ref: 'User'},
    OfficeID:{type: mongoose.Schema.Types.ObjectId,
        ref: 'Offices'}
})

exports.Request = mongoose.model("Rquest",RequestSchema);