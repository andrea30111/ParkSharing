var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    content: {type: String, required: true}, //mai vuoto di tipo string
    user: {type: String.Types.ObjectId, ref:'User'} //id automaticamente creato
});

module.exports = mongoose.model('Message',schema); //si usa come messages
