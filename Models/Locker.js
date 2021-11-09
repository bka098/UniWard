const mongoose = require("mongoose");

const lockerSchema = mongoose.Schema({
    lockerId:  {
        type: String,
        unique: true},
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'},
    rentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rent'},
    status:String,
    location: String,
    size: String,
    heightLevel: String,
    price: Number
})
module.exports = mongoose.model("Locker", lockerSchema);