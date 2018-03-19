var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

//here we store one entity for each unavailabilty timeframe
var schema = new Schema({
    parking: {type:Schema.Types.ObjectId, ref:'Parking'}, //foreign key
    start_ts: {type: Date, required: true}, //start date of unavailability
    end_ts: {type: Date, required: true}, //end date of unavailability
    type: {type: Number}, //0: hourly | 1: daily | 2: weekly | 3: monthly
    daily_recurrence: {type: Number}, //0: working days | N: every N days | null if not recurs daily
    start_daily_recurrence: {type: Date}, //start date of recurrence | null if not recurs daily
    end_daily_recurrence: {type: Date}, //end date of recurrence | null if not recurs daily
    weekly_recurrence: {type: Number}, // N: every N weeks | null if not recurs weekly
    weekly_recurrence_days: [{type: Number}], //which day of the week recurs 1: Monday | 2: Tuesday | ... | 6: Saturday | 7: Sunday | null if not recurs weekly
    start_weekly_recurrence: {type: Date}, //start date of recurrence | null if not recurs weekly
    end_weekly_recurrence: {type: Date} //end date of recurrence | null if not recurs weekly
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Availability',schema);
