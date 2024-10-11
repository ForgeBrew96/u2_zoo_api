const db = require('../db')
const { Habitat, Animal } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

const savannah = await Habitat.findOne({ habitatType: 'African Savannah' });

const lion = await new Animal({
    name: 'Lion',
    species: 'Panthera leo',
    habitat: savannah._id,
    mammal: true,
    dietType: 'Carnivore',
    endangered: true
});
await lion.save();

const elephant = await new Animal({
    name: 'Elephant',
    species: 'Loxodonta africana',
    habitat: savannah._id,
    mammal: true,
    dietType: 'Herbivore',
    endangered: true
});
await elephant.save

const rainForest = await Habitat.findOne({ habitatType: 'Amazon Rainforest' });

const jaguar = await new Animal({
    name: 'Jaguar',
    species: 'Panthera onca',
    habitat: rainForest._id,
    mammal: true,
    dietType: 'Carnivore',
    endangered: true
});
await jaguar.save();

const macaw = await new Animal({
    name: 'Macaw',
    species: 'Ara',
    habitat: rainForest._id,
    mammal: false,
    dietType: 'Herbivore',
    endangered: true
});
await macaw.save();

const arctic = await Habitat.findOne({ habitatType: 'Arctic Tundra' });

const polarBear = await new Animal({
    name: 'Polar Bear',
    species: 'Ursus maritimus',
    habitat: arctic._id,
    mammal: true,
    dietType: 'Carnivore',
    endangered: true
});
await polarBear.save();

const arcticFox = await new Animal({
    name: 'Arctic Fox',
    species: 'Vulpes lagopus',
    habitat: arctic._id,
    mammal: true,
    dietType: 'Carnivore',
    endangered: true
});
await arcticFox.save();
//-------------------------------

    console.log("Created some animals!")
}
const run = async () => {
    await main()
    db.close()
}

run()