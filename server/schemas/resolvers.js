const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User, ArtCard, Comments } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find({}).populate('comments');
        },
        user: async (parent, { username }) => {
            return User.findById({ username }).populate('comments');
        },
        getComments: async () => {
            try {
                const comments = await Comments.find().sort({ createdAt: -1});
                return comments
            } catch (err) {
                throw new Error(err);
            }
        }, 
        getComment: async (parent, { commentId }) => {
            try { 
                const comment = await Comments.findById(commentId);
                if (comment) {
                    return comment;
                } else { 
                    throw new Error('Comment not found');
                }
            } catch(err) {
                throw new Error(err);
            }
        },
        artCards: async () => {
            return ArtCard.find({}).populate('comments').populate('likes');
        },
        artCard: async (parent, { artId }) => 
            ArtCard.findById({ _id: artId }),
        },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        createComment: async (parent, { artId, body }, context) => {
            const { username }= signToken(context);
            if (body.trim() === '') {
                throw new UserInputError('Empty comment', {
                    errors: { message: 'Comment box must not be empty'}
                });
            }
                const artcard = await ArtCard.findById(artId);
                if (artcard) {
                    artcard.comments.unshift({
                        body,
                        username,
                        createdAt: new Date().toISOString()
                });
                await artcard.save();
                return artcard;
            } else throw new UserInputError('Comment not found');
        },
        deleteComment: async (parent, { artId, commentId }, context) => {
            const { username } = signToken(context);
            const artcard = await ArtCard.findById(artId);
            if (artcard) {
                const commentIndex = post.comments.findIndex((comment) => comment.id === commentId);
                if (artcard.comments[commentIndex].username === username) {
                    artcard.comments.splice(commentIndex, 1);
                    await post.save();
                    return artcard;
                } else {
                    throw new AuthenticationError('Must be logged in!');
                }
            } else { 
                throw new UserInputError('No comment found');
            }
        },
        login: async (parent, { username, password }) => {
            console.log("HIT!")
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('No user found with this username');
                
            }
            console.log("hit hit!")
            //something broken from here
            const correctPassword = await user.isCorrectPassword(password);

            if (!correctPassword) {
                // throw new AuthenticationError('Wrong email or password');
                console.log('hit hit hit hit')
             }
            //to here
            console.log("hit hit hit!")
            const token = signToken(user);

            return { token, user };
        },
        likeArtCard: async (parent, { artId}, context) => {
            const { username } = signToken(context);
            const artcard = await ArtCard.findById(artId);
            if (artcard) {
                if (artcard.likes.find((like) => like.username === username)) {
                    artcard.likes = artcard.likes.filter((like) => like.username !== username);
                } else {
                    post.likes.push({
                        username,
                        createdAt: new Date().toISOString()
                    });
                }
                await artcard.save();
                return artcard;
            } else throw new UserInputError('No Art found');
        }
    },
};

module.exports = resolvers;