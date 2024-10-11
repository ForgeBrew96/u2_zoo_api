const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const AnimalSchema = new Schema({
    name: { type: String, required: true},
    species: { type: String, required: true },
    habitat: { type: Schema.Types.ObjectId, ref: 'Habitat', required: true },
    mammal: { type: Boolean, required: true },
    dietType: { type: String, requied: true },
    endangered: { type: Boolean, required: true },
    img: {
        type: String 
    }
});

const Animal = mongoose.model('Animal', AnimalSchema);
module.exports = Animal;