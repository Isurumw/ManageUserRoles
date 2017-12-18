var router = require('express').Router(),
    conAuth = require('../controllers/auth'),
    conUser = require('../controllers/user');

router.route('/').get(conAuth.isLocalAuthenticated, conUser.getusers);
router.route('/:id').delete(conAuth.isLocalAuthenticated, conUser.deleteuser);

module.exports = router