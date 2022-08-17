const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
    username: {
        type: String,
        minLength: 1,
        maxLength: 50,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    body: {
        type: String,
        required: true
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;