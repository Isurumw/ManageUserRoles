var donation = require('../models').donation,
    HttpStatus = require('http-status-codes'),
    config = require('config');

module.exports = {
    getdonations: (req, res) => {
        donation.find((err, result) => {
            if (err) res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
            res.status(HttpStatus.OK).json(result);
        });
    },
    createdonation: (req, res) => {
        let newDonation = new donation(req.body);
        newDonation.save((err, result) => {
            if (err) res.status(HttpStatus.BAD_REQUEST).json(err);
            res.status(HttpStatus.OK).json(result);
        });
    },
    editdonation: (req, res) => {
        donation.findOneAndUpdate({ _id: req.body.id }, { $set: req.body }, { new: true }, (err, doc) => {
            if (err) res.status(HttpStatus.BAD_REQUEST).json(err);
            res.status(HttpStatus.OK).json(doc);
        });
    },
    deletdonation: (req, res) => {
        donation.remove({ _id: req.param('id') }, (err, result) => {
            if (err) res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
            res.status(HttpStatus.OK).json(result);
        });
    }
}