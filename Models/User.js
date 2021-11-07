const mongoose = require('mongoose');
const { intersects } = require('semver');

const UserSchema = mongoose.Schema({
    userID : String,
    UserPassword:String,
    UserName : String,
    UserPhoneNumber: String,
    UserEmail:String,
    UserType: String,
    UserFaclutyType:String
})

exports.User = mongoose.model('User', UserSchema);