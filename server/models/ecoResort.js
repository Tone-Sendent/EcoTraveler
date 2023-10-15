const mongoose = require('mongoose');

const ecoResortSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    location: {
        type: String,
        required: true
    },
    pricePerNight: Number,
    imageUrl: String,
    ecoRating: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('EcoResort', ecoResortSchema);
