var express = require('express');
var router = express.Router();
var Parking = require('../models/parking');
var Availability = require('../models/availability');

router.post('/', function (req, res, next) {
    
    minLat = req.body.minBounds.lat;
    maxLat = req.body.maxBounds.lat;
    minLen = req.body.minBounds.lng;
    maxLen = req.body.maxBounds.lng;
    
    Parking.find({
        latitude : { $gte :  minLat, $lte :  maxLat},
        longitude : { $gte :  minLen, $lte :  maxLen}  
    }).populate('availability', null, {start_ts: { $gte :  minLat, $lte :  maxLat}})
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
