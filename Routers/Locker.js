const Locker = require('../Models/Locker');
const Rent = require('../Models/Rent');
const express = require('express');
const router = express.Router();

//Creates a new locker
router.post("", (req, res, next) => {
  const locker = new Locker({
    lockerId: req.body.lockerId,
    userId: req.body.userId,
    rentId: req.body.rentId,
    status: req.body.status,
    location: req.body.location,
    size: req.body.size,
    heightLevel: req.body.heightLevel,
    price: req.body.price
  });
  locker.save().then(createdLocker => {
    res.status(201).json({
      message: "Locker added successfully",
      lockerId: createdLocker._id
    });
  });
});

//Updates a locker based on its object id
router.put("/:id", (req, res, next) => {
  const locker = new Locker({
    lockerId: req.body.lockerId,
    userId: req.body.userId,
    rentId: req.body.rentId,
    status: req.body.status,
    location: req.body.location,
    size: req.body.size,
    heightLevel: req.body.heightLevel,
    price: req.body.price
  });
  Locker.updateOne({ _id: req.params.id }, locker).then(result => {
    res.status(200).json({ message: "Update successful!" });
  }).catch(() => {
    console.log("Locker not found")
  });
});

//Fetchs a list of all lockers
router.get("", (req, res, next) => {
  Locker.find().then(documents => {
    res.status(200).json({
      message: "Lockers fetched successfully!",
      lockers: documents
    });
  });
});

//Fetches a locker based on a search parameter
router.get("/:searchText", (req, res, next) => {
  Locker.find({$text: { $search: req.params.searchText
  }}, function(err, foundLockers){
if(err){
    console.log(err);
} else {
   res.status(200).json({lockers: foundLockers});
}
});
});

//Deletes one locker based on its object id
router.delete("/:id", (req, res, next) => {
  Locker.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Locker deleted!" });
  });
});

//Fetches a locker based on its object id
router.get("/:id", (req, res, next) => {
  Locker.findById(req.params.id).then(locker => {
    if (locker) {
      res.status(200).json(locker);
    } else {
      res.status(404).json({ message: "Locker not found!" });
    }
  });
});

//Adds an entry to rented lockers (links user with a locker)
router.post("", (req, res, next) => {

  Locker.updateOne({lockerId: req.body.lockerId}, {
    status: "Rented"
  });
  const rent = new Rent({
    rentId: req.body.rentId,
    dateOfRent: req.body.dateOfRent,
    userId: req.body.userId,
    lockerId: req.body.lockerId
  });
  rent.save().then(newRentEntry => {
    res.status(201).json({
      message: "Rent information added successfully",
      newRentEntry: newRentEntry._id
    });
  });
});

module.exports = router;
