const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// Sends the React index.html file up
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;