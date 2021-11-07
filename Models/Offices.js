const mongoose = require('mongoose');

const OfficeSchema= mongoose.Schema({
    OfficeID:{
        type:String,
        unique: true
    },
    UserID: {type: mongoose.Schema.Types.ObjectId,
        ref: 'User'},
    OfficeStatus:String,
    RequestID:{type: mongoose.Schema.Types.ObjectId,
        ref: 'Request'},
    OfficeType:String,
    OfficeLocation:String,    
})
module.exports = mongoose.model("Offices",OfficeSchema);