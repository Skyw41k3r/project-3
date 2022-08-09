// Imports Express
const router = require('express').Router();

// Gets all functions from Art controller
const {
    getArtworks,
    getArtById,
    postArtwork,
    updateArt,
    deleteArt,
} = require('../../controllers/artController');

// /api/artwork routes for GET and POST
router.route('/').get(getArtworks).post(postArtwork);

// /api/artwork/:artId routes for GET, PUT, DELETE
router.route('/:artId').get(getArtById).put(updateArt).delete(deleteArt);

module.exports = router;