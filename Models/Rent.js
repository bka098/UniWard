const mongoose = require("mongoose");

const RentSchema = mongoose.Schema({
    RentID:  {type: String,
        unique: true},
    DateOfRent: [Date],
    UserID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    LockerID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lockers',
    }
})

module.exports = mongoose.model("Rent", RentSchema);