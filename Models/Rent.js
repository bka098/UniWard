const mongoose = require("mongoose");

const RentSchema = mongoose.Schema({
    rentId:  {type: String,
        unique: true},
    dateOfRent: [Date],
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    lockerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lockers',
    }
})

module.exports = mongoose.model("Rent", RentSchema);