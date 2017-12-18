var router = require('express').Router(),
    conAuth = require('../controllers/auth'),
    utilities = require('../helpers/utility'),
    conDonation = require('../controllers/donation');

router.route('/')
    .get(conAuth.isLocalAuthenticated, conDonation.getdonations)
    .post(conAuth.isLocalAuthenticated, conDonation.createdonation)
    .put(conAuth.isLocalAuthenticated, conDonation.editdonation);
router.route('/:id').delete(conAuth.isLocalAuthenticated, utilities.checkUserRole, conDonation.deletdonation);

module.exports = router