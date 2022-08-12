const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now,
    },
    artcards: [
        {
            type: Schema.Types.ObjectId,
            ref: 'ArtCard',
        },
    ],
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;