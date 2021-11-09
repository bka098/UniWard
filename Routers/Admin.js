const Admins = require('../Models/Admin');
const express = require('express');
const router = express.Router();


router.get("", (req, res, next) => {
    const AdminsList = await Admins.find();

    if(!AdminsList) {
        res.status(500).json({success: false})
    } 
    res.status(200).send(AdminsList);
})

module.exports = router;