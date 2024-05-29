// db.js

const { MongoClient } = require('mongodb');
const dotenv = require('dotenv').config()
const client = new MongoClient(process.env.CONNECTION_STRING);

async function connectDB() {
    try {
        await client.connect();
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

async function closeDB() {
    try {
        await client.close();
    } catch (error) {
        console.error('Error closing MongoDB connection:', error);
    }
}

// Function to get database instance for a specific school
function getSchoolDB(schoolName) {
    return client.db(schoolName);
}

module.exports = {
    connectDB,
    closeDB,
    getSchoolDB
};
