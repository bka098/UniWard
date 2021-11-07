const mongoose = require("mongoose");

const lockerSchema = mongoose.Schema({
    LockerID: String,
    UserID: {type: mongoose.Schema.Types.ObjectId,
        ref: 'User'},
    RentID: {type: mongoose.Schema.Types.ObjectId,
        ref: 'Rent'},
    LockerStatus:String,
    Location: String,
    Size: String,
    HeightLevel: String,
    Price: number
})
exports.Lockers = mongoose.model("Lockers",LockerSchema);