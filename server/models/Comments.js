const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
    comment: {
        type: String,
        minLength: 1,
        maxLength: 50,
    },
    commentDate: {
        type: Date,
        default: Date.now,
    },
    // artcards: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'ArtCard',
    //     },
    // ],
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;