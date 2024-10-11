const db = require('../db')
const { Habitat, Animal } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const savannah = await new Habitat({
        habitatType: "African Savannah",
        description: "Hot, dry, with a short rainy season",
        location: "Africa, covering countries like Kenya and Tanzania"
    });
    await savannah.save();

    const rainForest = await new Habitat({
        habitatType: "Amazon Rainforest",
        description: "Hot and humid, with heavy rainfall",
        location: "South America, primarily in Brazil"
    });
    await rainForest.save();

    const arctic = await new Habitat({
        habitatType: "Arctic Tundra",
        description: "Cold, windy, with icy conditions and long winters",
        location: "Northern Hemisphere, covering areas like Alaska, Canada, and Greenland"
    });
    await arctic.save();

    console.log("Created some habitats!")
}
const run = async () => {
    await main()
    db.close()
}

run()