const mongoose = require("mongoose");

const RequestSchema = mongoose.Schema({
    RequestID: {type: String,
        unique: true},
    RequetsStatus:String,
    UserID:{type: mongoose.Schema.Types.ObjectId,
        ref: 'User'},
    OfficeID:{type: mongoose.Schema.Types.ObjectId,
        ref: 'Offices'},
     
})

module.exports = mongoose.model("Request", RequestSchema);

