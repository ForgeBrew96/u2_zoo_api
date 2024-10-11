const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const HabitatSchema = new Schema(
    {
        habitatType: { type: String, required: true },
        description: { type: String, required: true },
        location: { type: String, required: true },
    },
    { timestamps: true },
)

const Habitat = mongoose.model('Habitat', HabitatSchema);
module.exports = Habitat;