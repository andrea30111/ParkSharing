var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    firstName: {type: String, required: true}, //mai vuoto di tipo string
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type:String, required: true, unique:true},
    messages: [{type:Schema.Types.ObjectId, ref:'Mesage'}]
});

module.exports = mongoose.model('User',schema); //si usa come users
