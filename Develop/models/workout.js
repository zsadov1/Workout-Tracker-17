const mongoose = require("mongoose");

const schema = mongoose.Schema;

const workoutSchema = new Schema({

    day: {
        type: Date,
        required: "Day is required!"
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ]
});

const workout= mongoose.model("workout", workoutSchema);

module.exports = workout; 