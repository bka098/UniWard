const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userId : {
        type: String,
        unique: true
    },
    userPassword: String,
    userName : String,
    userPhoneNumber: {
        type: String,
        unique: true
    },
    userEmail:{
        type: String,
        unique: true
    },
    userType: String,
    userFacultyType:String
})

UserSchema.virtual('id')
module.exports = mongoose.model('User', UserSchema);