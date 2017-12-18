var mongoose = require('mongoose'),
    conn = mongoose.connection,
    models = ['user', 'donation'];

conn.once('open', () => {
    console.log('mongo connected...');
});

models.forEach((model) => {
    module.exports[model] = require('./' + model);
});