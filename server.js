const express = require('express');
const cors = require('cors');
const { connectDB } = require('./db');
const bodyParser = require('body-parser');
const logger = require('morgan');
const animalController = require('./controllers/animalController');
const habitatController = require('./controllers/habitatController');

const PORT = process.env.PORT || 3003;

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.use(bodyParser.json());

(async () => {
    try {
        await connectDB();
    } catch (error) {
        console.error('Failed to connect to the database');
        process.exit(1); // Exit process if the DB connection fails
    }
})();

app.listen(PORT, () => {
    console.log(`express server running on port ${PORT}`);
});

// Set up your first endpoint with express
app.get('/', (req, res) => {
    res.send('Welcome to the Zoo!');
});

//Animals==============================
app.get('/animals', (req, res) => {
    console.log("GET /animals route hit");
    animalController.getAllAnimals(req, res);
});

app.get('/animals/:id', (req, res) => {
    console.log(`GET /animals/${req.params.id} route hit`);
    animalController.getAnimalsById(req, res);
});

app.post('/animals', (req, res) => {
    console.log("POST /animals route hit");
    animalController.createAnimal(req, res);
});

app.put('/animals/:id', (req, res) => {
    console.log(`PUT /animals/${req.params.id} route hit`);
    animalController.updateAnimal(req, res);
});

app.delete('/animals/:id', (req, res) => {
    console.log(`DELETE /animals/${req.params.id} route hit`);
    animalController.deleteAnimal(req, res);
});
//Habitats==============================
app.get('/habitats', (req, res) => {
    console.log("GET /habitats route hit");
    habitatController.v(req, res);
});

app.get('/habitats/:id', (req, res) => {
    console.log(`GET /habitats/${req.params.id} route hit`);
    habitatController.getHabitatById(req, res);
});

app.post('/habitats', (req, res) => {
    console.log("POST /habitats route hit");
    habitatController.createHabitat(req, res);
});

app.put('/habitats', (req, res) => {
    console.log(`PUT /habitats/${req.params.id} route hit`);
    habitatController.updateHabitat(req, res);
});

app.delete('/habitats', (req, res) => {
    console.log(`DELETE /habitats/${req.params.id} route hit`);
    habitatController.deleteHabitat(req, res);
});






process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('Database connection closed');
    process.exit(0);
});