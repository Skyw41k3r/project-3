const { AuthenticationError } = require('apollo-server-express');
const { User, ArtCard, Order } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find({}).populate('artcards');
        },
        user: async (parent, { username }) => {
            return User.findById({ username }).populate('artcards');
        },
        artcards: async (parent, { username }) => {
            const params = username ? { username } : {};
            return ArtCard.find(params).sort({ price: -1 });
        },
        artcard: async (parent, { artId }) => 
            ArtCard.findById({ _id: artId }),
        },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        addArtCard: async (parent, { title }, context) => {
            if (context.user) {
                const artcard = await ArtCard.create({
                    title,
                });
                await User.findOneAndUpdate(
                    { _id: context.user._id},
                    { $addToSet: { artcards: artcard._id } }
                );
                return artcard;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        deleteArtCard: async (parent, { artId }, context) => {
            if (context.user) {
                const artcard = await ArtCard.findByIdAndDelete(
                    { _id: artId }
                );
                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { artcards: artcard._id } }
                );
                return artcard;
            }
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email');
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