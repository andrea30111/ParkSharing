var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    user: {type:Schema.Types.ObjectId, ref:'User'},
    parking: {type:Schema.Types.ObjectId, ref:'Parking'},
    car: {type:Schema.Types.ObjectId, ref:'Car'},
    start_ts: {type: Date, required: true},
    end_ts: {type: Date, required: true},
    amount: {type: Number, required: true},
    payment_type: {type: Number, required: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Reservation',schema); //si usa come users
