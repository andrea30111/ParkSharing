var express = require('express');
var router = express.Router();
var Parking = require('../models/parking');

router.post('/', function (req, res, next) {
    minLat = req.body.lat-10;
    maxLat = req.body.lat+10;
    minLen = req.body.lng-10;
    maxLen = req.body.lng+10;
    Parking.find({
        latitude : { $gte :  minLat, $lte :  maxLat},
        longitude : { $gte :  minLen, $lte :  maxLen}  
    })
        .exec(function (err, parkings) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: parkings
            });
        });
});

module.exports = router;