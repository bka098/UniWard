const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    AdminID:  {type: String,
    unique: true},
    AdminType:String,
    AdminName:String,
    AdminPassword:String,
    AdminPhoneNumber:Number,
    isSupervisor:{
        type: Boolean,
        default: false
    }
})
exports.Admin = mongoose.model('Admin',AdminSchema);