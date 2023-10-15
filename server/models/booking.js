const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    ecoResort: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EcoResort'
    },
    startDate: Date,
    endDate: Date,
    totalAmount: Number
});

module.exports = mongoose.model('Booking', bookingSchema);
