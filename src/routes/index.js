var express = require('express');
var router = express.Router();
var UserRoutes = require('./user.route');

/**
 * Status API
 */
router.get('/status', (req, res) => {
  res.send('Ok');
});

/**
 * User API's
 */
router.use('/user', UserRoutes);

module.exports = router;
