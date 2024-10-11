const Habitat = require('../models/habitat');

//Get Index
const getAllHabitats = async (req, res) => {
    try {
        const habitats = await Habitat.find({});
        res.json(habitats);
    } catch (e) {
        return res.status(500).send(e.message);
    }
};

//Get Show
const getHabitatById = async (req, res) => {
    try {
        const { id } = req.params;
        const habitat = await Habitat.findById(id);
        if (habitat) {
            return res.json(habitat);
        }
        return res.status(404).send('habitat not found');
    } catch (e) {
        return res.status(500).send(e.message);
    }
};

//Create -> POST
const createHabitat = async (req, res) => {
    try {
        const habitat = await new Habitat(req.body);
        await habitat.save();
        return res.status(201).json({ habitat });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

//Update -> PUT
const updateHabitat = async (req, res) => {
    try {
        const { id } = req.params;
        const habitat = await Habitat.findByIdAndUpdate(id, req.body, { new: true });
        if (habitat) {
            return res.status(200).json(habitat);
        }
        throw new Error('habitat not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

//Delete -> DELETE
const deleteHabitat = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Habitat.findByIdAndDelete(id);
        if (deleted) {
            return res.status(200).send('habitat deleted');
        }
        throw new Error('habitat not found');
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

module.exports = {
    getAllHabitats,
    getHabitatById,
    createHabitat,
    deleteHabitat,
    updateHabitat
};