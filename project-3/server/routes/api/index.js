// Express other routes
const router = require('express').Router();
const artRoutes = require('./artRoutes');
const userRoutes = require('./userRoutes');

router.use('/artwork', artRoutes);
router.use('/users', userRoutes);

module.exports = router;