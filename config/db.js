//write a function connect to the monogdb collection using mongoose and export it
const mongoose = require('mongoose');
const { CONSTANTS: {MONGO_URI } } = require('../config');
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
        useUnifiedTopology: true
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
    }

    module.exports = {
        connectDB,
    } ;    