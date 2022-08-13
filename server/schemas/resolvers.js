const { AuthenticationError } = require('apollo-server-express');
const { User, ArtCard, Order } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find({}).populate('artcards');
        },
        user: async (parent, { id }) => {
            return User.findById({ _id: id }).populate('artcards');
        },
        artcards: async (parent, { username }) => {
            const params = username ? { username } : {};
            return ArtCard.find(params).sort({ price: -1 });
        },
        artcard: async (parent, { id }) => 
            ArtCard.findById({ _id: id }),
        },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        addArtCard: async (parent, { id, artcard }) => {
            return User.findOneAndUpdate(
                { _id: id },
                { $addToSet: { artcards: artcard } },
                { new: true }
            );
        },
        deleteUser: async (parent, { id }) => {
            return User.findOneAndDelete({ _id: id });
        },
        deleteArtCard: async (parent, { id, artcard }) => {
            return User.findOneAndUpdate(
                { _id: id },
                { $pull: { artcards: artcard } },
                { new: true }
            );
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Np user found with this email');
            }
            const correctPassword = await user.isCorrectPassword(password);

            if (!correctPassword) {
                throw new AuthenticationError('Wrong email or password');
            }
            const token = signToken(user);

            return { token, user };
        },
    },
};

module.exports = resolvers;