var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    cap: {type: Number, required: true},
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true},
    length: {type: Number, required: true},
    width: {type: Number, required: true},
    height: {type: Number, required: true},
    type: {type: Number, required:true}, //0: private | 1: hotel | 2: supermarket
    box_type: {type: Number}, //set only if private parking (type=0) - 0: internal box. | 1: external box | 2: internal space | 3: external space
    hourly_price: {type: Number},
    daily_price: {type: Number},
    weekly_price: {type: Number},
    montly_price: {type: Number},
    user: {type:Schema.Types.ObjectId, ref:'User'} //foreign key
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Parking',schema);
