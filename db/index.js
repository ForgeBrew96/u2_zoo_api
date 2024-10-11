const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://christianbmendoza96:cometshaddol29@student-cluster.2qeno.mongodb.net/zooDatabase?retryWrites=true&w=majority&appName=student-cluster');
        console.log('Successfully connected to MongoDB.');
    } catch (e) {
        console.error('Database connection error:', e.message);
        throw e; // Ensure to throw error if any for proper error handling
    }
};

mongoose.set('debug', true);

module.exports = { connectDB };