var express = require('express');
var router = express.Router();
var Parking = require('../models/parking');
var Availability = require('../models/availability');

router.post('/', function (req, res, next) {

    minLat = req.body.minBounds.lat;
    maxLat = req.body.maxBounds.lat;
    minLen = req.body.minBounds.lng;
    maxLen = req.body.maxBounds.lng;
    startTime = new Date(req.body.startTime);
    endTime = new Date(req.body.endTime);

    Parking.aggregate([
        {$match:
         {
            latitude : { $gte :  minLat, $lte :  maxLat},
            longitude : { $gte :  minLen, $lte :  maxLen}
         }
        },
        {$lookup:
         {from : "availabilities",
          localField : "_id" ,
          foreignField : "parking" ,
          as : "availabilities"}
        },
        {$lookup:
         {from : "reservations",
          localField : "_id" ,
          foreignField : "parking" ,
          as : "reservations"}
        }
    ]).exec(function (err, parkings) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            var availableParkings = [];
            var flag = 0;

            for( var i in parkings){
                var parking = parkings[i];

                //console.log(parking);

                parking.availabilities.forEach(function(slot){
                    console.log(slot);
                    console.log(startTime);
                    console.log(endTime);

                    if((startTime > slot.start_ts && startTime < slot.end_ts) ||
                        (endTime > slot.start_ts && endTime < slot.end_ts) ||
                        (startTime < slot.start_ts && endTime > slot.end_ts)){

                        console.log("adding");

                        flag = 1;
                    }
                });

                parking.reservations.forEach(function(slot){
                    console.log(slot);
                    console.log(startTime);
                    console.log(endTime);

                    if((startTime > slot.start_ts && startTime < slot.end_ts) ||
                        (endTime > slot.start_ts && endTime < slot.end_ts) ||
                        (startTime < slot.start_ts && endTime > slot.end_ts)){

                        console.log("adding");

                        flag = 1;
                    }
                });

                if(flag == 0){
                    availableParkings.push(parking);
                }

                flag = 0;
            }
            res.status(200).json({
                message: 'Success',
                obj: availableParkings
            });
        });
});

module.exports = router;
