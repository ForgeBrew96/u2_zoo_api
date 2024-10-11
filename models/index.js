const mongoose = require('mongoose')

const AnimalSchema = require('./animal')
const HabitatSchema = require('./habitat')

const Animal = mongoose.model('Animal', AnimalSchema)
const Habitat = mongoose.model('Habitat', HabitatSchema)

module.exports = {
    Animal,
    Habitat
}