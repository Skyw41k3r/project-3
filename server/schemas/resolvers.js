const { AuthenticationError } = require('apollo-server-express');
const { User, ArtCard, Order } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await (await User.findById(context.user.id)).populate('artcard');
                return user;
            } throw new AuthenticationError('Not logged in');
           
        },
        artcards: async () => {
            return ArtCard.find({});
        },
        artcard: async (parent, { artId }) => {
            return ArtCard.findOne({ _id: artId });
        },
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        addArtCard: async (parent, { userId, artcard }) => {
            return User.findOneAndUpdate(
                { _id: userId },
                { $addToSet: { artcards: artcard } },
                { new: true }
            );
        },
        deleteUser: async (parent, { userId }) => {
            return User.findOneAndDelete({ _id: userId });
        },
        deleteArtCard: async (parent, { userId, artcard }) => {
            return User.findOneAndUpdate(
                { _id: userId },
                { $pull: { artcards: artcard } },
                { new: true }
            );
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Wrong email or password');
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