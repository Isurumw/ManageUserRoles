var router = require('express').Router(),
    conAuth = require('../controllers/auth');

router.route('/signin').post(conAuth.authenticateUser, conAuth.generateAndSendToken);
router.route('/signup').post(conAuth.signup, conAuth.generateAndSendToken);
router.route('/refresh').post(conAuth.isRefreshAuthenticated, conAuth.refreshToken, conAuth.generateAndSendToken);

module.exports = router;