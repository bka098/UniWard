const Office = require('../Models/Offices');
const Request = require('../Models/Request');
const express = require('express');
const router = express.Router();

router.get("", (req, res, next) => {
    const OfficeList = await Office.find();

    if(!OfficeList) {
        res.status(500).json({success: false})
    } 
    res.status(200).send(OfficeList);
})

router.post("", (req, res, next) => {
    const request = new Request({
        requestId: req.body.requestId,
        requestStatus: req.body.requestStatus,
        userId: req.body.userId,
        officeId: req.body.officeId
    }); 
    request.save().then(newRequest => {
        res.status(201).json({
            message: "Request has been successfully sent",
            newRequest: newRequest._id
        });
    });
});

module.exports = router;