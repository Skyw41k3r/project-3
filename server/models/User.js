const mongoose = require('mongoose');
const multer = require('multer');
const { schema } = mongoose;

const bcrypt = require('bcrypt');
const Order = require('./Order');

const userSchema = new schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
      },
      lastName: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        minlength: 5,
      },
      orders: [Order.schema],
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.modified('password')) {
        const saltRounds = 13;
        this.password = await bcrypt.hash(this.password, saltRound);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;