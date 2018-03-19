var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    plate: {type: String, required: true}, //mai vuoto di tipo string
    type: {type: Number, required: true},
    color: {type: String, required: true},
    user: {type:Schema.Types.ObjectId, ref:'User'}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Car',schema); //si usa come users
