const mongoose = require('mongoose');
const Comments = require('./Comments');
const User = require('./User');

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
    comments: [Comments.schema],
    likes: [
        {
            username: String,
            createdAt: String
        }
    ],
    user: [User.schema]
});

const ArtCard = mongoose.model('ArtCard', artCardSchema);

module.exports = ArtCard;