const mongoose = require("mongoose");

const RentSchema = mongoose.Schema({
    RentID: String,
    DateOfRent: [Date],
    UserID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    OfficeID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lockers',
    }
})

exports.Rent = mongoose.model("Rent",RentSchema);