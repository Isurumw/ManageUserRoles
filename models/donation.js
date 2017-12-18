var mongoose = require('mongoose'),
    config = require('config'),
    Schema = mongoose.Schema;

var donationSchema = new Schema({
    type: {
        type: String,
        enum: [config.donationsType.SINGLEDONATION, config.donationsType.COMMUNITYDONATION],
        required: true
    },
    personname: {
        type: String,
        required: function() {
            return this.type == config.donationsType.SINGLEDONATION;
        }
    },
    communityname: {
        type: String,
        required: function() {
            return this.type == config.donationsType.COMMUNITYDONATION;
        }
    },
    description: { type: String, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Donation', donationSchema);