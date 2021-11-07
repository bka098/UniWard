const Office = require('../Models/Offices');
const Request = require('../Models/Request');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const OfficeList = await Office.find();

    if(!OfficeList) {
        res.status(500).json({success: false})
    } 
    res.status(200).send(OfficeList);
})

module.exports = router;