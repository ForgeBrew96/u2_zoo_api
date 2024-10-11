const Animal = require('../models/animal');

const getAllAnimals = async (req, res) => {
    try {
        console.log('Fetching all animals...');
        const animals = await Animal.find({});
        console.log('Animals fetched successfully');
        res.json(animals);
    } catch (e) {
        console.error('Error fetching animals:', e);
        return res.status(500).send(e.message);
    }
};

//Get Show
const getAnimalsById = async (req, res) => {
    try {
        const { id } = req.params;
        const animal = await Animal.findById(id);
        if (animal) {
            return res.json(animal);
        }
        return res.status(404).send('Animal not found');
    } catch (e) {
        return res.status(500).send(e.message);
    }
};

//Create -> POST
const createAnimal = async (req, res) => {
    try {
        const animal = await new Animal(req.body);
        await animal.save();
        return res.status(201).json({ animal });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

//Update -> PUT
const updateAnimal = async (req, res) => {
    try {
        const { id } = req.params;
        const animal = await Animal.findByIdAndUpdate(id, req.body, { new: true });
        if (animal) {
            return res.status(200).json(animal);
        }
        throw new Error('animal not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

//Delete -> DELETE
const deleteAnimal = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Animal.findByIdAndDelete(id);
        if (deleted) {
            return res.status(200).send('animal deleted');
        }
        throw new Error('animal not found');
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

module.exports = {
    getAllAnimals,
    getAnimalsById,
    createAnimal,
    deleteAnimal,
    updateAnimal
};