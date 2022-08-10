const { User, ArtCard, Order } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({});
        },

        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },
        artcards: async () => {
            return ArtCard.find({});
        },
        artcard: async (parent, { artId }) => {
            return ArtCard.findOne({ _id: artId });
        },
    },

    Mutation: {
        addUser: async (parent, { firstName }) => {
            return User.create({ firstName });
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
    },
};

module.exports = resolvers;