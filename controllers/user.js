var user = require('../models').user,
    HttpStatus = require('http-status-codes'),
    config = require('config');

module.exports = {
    getusers: (req, res) => {
        user.find((err, users) => {
            if (err) res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
            res.status(HttpStatus.OK).json(users);
        });
    },
    deleteuser: (req, res) => {
        user.remove({ _id: req.param('id') }, (err, result) => {
            if (err) res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
            res.status(HttpStatus.OK).json(result);
        });
    }
}