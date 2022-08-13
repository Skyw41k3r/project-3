const mongoose = require('mongoose');

const { Schema } = mongoose;

const artCardSchema = new Schema({
    image: {
        type: String,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true 
    }
});

const ArtCard = mongoose.model('ArtCard', artCardSchema);

module.exports = ArtCard;