const mongoose = require('mongoose');
const { intersects } = require('semver');

const UserSchema = mongoose.Schema({
    userID : {
        type: String,
        unique: true
    },
    UserPassword:String,
    UserName : String,
    UserPhoneNumber: String,
    UserEmail:String,
    UserType: String,
    UserFacultyType:String
})

module.exports = mongoose.model('User', UserSchema);