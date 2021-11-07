const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    AdminID:  {type: String,
    unique: true},
    AdminType:String,
    AdminName:String,
    AdminPassword:String,
    AdminPhoneNumber:Number
})
exports.Admin = mongoose.model('Admin',AdminSchema);