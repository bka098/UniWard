const mongoose = require("mongoose");

const lockerSchema = mongoose.Schema({
    LockerID:  {type: String,
        unique: true},
    UserID: {type: mongoose.Schema.Types.ObjectId,
        ref: 'User'},
    RentID: {type: mongoose.Schema.Types.ObjectId,
        ref: 'Rent'},
    LockerStatus:String,
    Location: String,
    Size: String,
    HeightLevel: String,
    Price: Number
})
module.exports = mongoose.model("Lockers", lockerSchema);