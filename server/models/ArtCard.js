const mongoose = require('mongoose');
const multer = require('multer');
const { schema } = mongoose;

const artCardSchema = new schema({
    image: {
        type: Image,
        ref: 'Images',

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
        type: int 
    }
});

const ArtCard = mongoose.model('ArtCard', artCardSchema);

module.exports = ArtCard;