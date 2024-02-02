

const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.join(__dirname, '../.env') });
const db = process.env.MONGO_URI 

const CONSTANTS = {
    PORT: 3000,
    MONGO_URI: db
}

module.exports = {
    CONSTANTS
} ;