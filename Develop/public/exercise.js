const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type:String,
    name:String,
    duration:(Number),
    weight:(Number),
    reps:(Number),
    sets:(Number),
    distance:(Number),
});

const exercise = mongoose.model("exercise", exerciseSchema);

module.exports = exercise;
