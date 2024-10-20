// db.js

const mongoose = require("mongoose");

module.exports = () => {
    const uri = process.env.DB; // Ensure this is set correctly in your .env file

    mongoose.connect(uri)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((error) => {
            console.error("MongoDB connection error:", error);
            console.log("Cannot connect to MongoDB");
        });
};