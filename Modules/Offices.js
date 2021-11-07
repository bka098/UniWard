const mongoose = require('mongoose');

const OfficeSchema= mongoose.Schema({
    OfficeID:{
        type:String,
        unique: true
    },
    UserID: String,
    OfficeStatus:String,
    RequestID:String,
    FaclutyType:String,
    OfficeType:String,
    OfficeLocation:String,    
})
exports.Offices = mongoose.model("Offices",OfficeSchema);