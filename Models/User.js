const mongoose = require('mongoose');
const { intersects } = require('semver');

const UserSchema = mongoose.Schema({
    userID : {
        type: String,
        unique: true
    },
    UserPassword:String,
    UserName : String,
    UserPhoneNumber: {
        type: String,
        unique: true
    },
    UserEmail:{
        type: String,
        unique: true
    },
    UserType: String,
    UserFacultyType:String
})

UserSchema.virtual('id')
module.exports = mongoose.model('User', UserSchema);