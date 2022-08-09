// Import required models for controller
const { User, ArtCard } = require('../models');
// Import JWT sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
    // Gets all users
    getUsers(req, res) {
        User.find()
        .then((userData) => res.json(userData))
        .catch((err) => res.status(500).json(err));
    },
    // Get a user by their id or their email
    async getOneUser({ userData = null, params }, res) {
        const renderUser = await User.findOne(
            { $or: [{ _id: userData ? userData._id : params.id },
            { email: params.email }],
        });
        if (!renderUser) {
            return res.status(400).json({ message: 'No user found with ths id!' });
        }
        res.json(renderUser);
    },
    async createUser({ body }, res) {
        const user = await User.create(body);

        if (!user) {
            return res.status(400).json({ message: 'Something went wrong!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { new: true }
        )
        .then((userData) =>
            !userData
                ? res.status(404).json({ message: 'No user with this ID!' })
                : res.json(userData)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err); 
        });       
    },
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
        .then((userData) =>
        !userData
            ? res.status(404).json({ message: 'No User exists!' })
            : ArtCard.findOneAndUpdate(
                { users: req.params.userId },
                { $pull: { users: req.params.userId } },
                { new: true }
            )
        )
        .then((artwork) =>
            !artwork
                ? res.status(404).json({ message: 'User deleted but no artworks found!' })
                : res.json({ message: 'User and artworks successfully deleted!'})
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    }
}