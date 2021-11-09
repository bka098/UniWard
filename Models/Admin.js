const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    adminId:  {
        type: String, 
        unique: true},
    adminType: String,
    adminName:String,
    adminPassword:String,
    adminPhoneNumber:{
        type: String,
        unique: true}
})
module.exports = mongoose.model('Admin', AdminSchema);