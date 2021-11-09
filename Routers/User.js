const User = require('../Models/User');
const express = require('express');
const router = express.Router();

router.get("", (req, res, next) =>{
    const UserList = await User.find();

    if(!UserList) {
        res.status(500).json({success: false})
    } 
    res.status(200).send(UserList);
})

module.exports = router;