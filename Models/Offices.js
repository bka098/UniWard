const mongoose = require('mongoose');

const OfficeSchema= mongoose.Schema({
    officeId:{
        type: String,
        unique: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'},
    officeStatus: String,
    requestId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Request'},
    officeType: String,
    officeLocation: String,    
})

module.exports = mongoose.model("Offices", OfficeSchema);