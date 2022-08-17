const mongoose = require('mongoose');
const commentSchema = require('./Comments')

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
    comments: {
        type: String,
        required: false,
        Comment: [commentSchema],
    }
});

const ArtCard = mongoose.model('ArtCard', artCardSchema);

module.exports = ArtCard;