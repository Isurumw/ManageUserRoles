module.exports = (router) => {
    router.get('/', (req, res) => {
        res.send('Wellcome to donations api!');
    });

    // manage nested routes 
    router.use('/auth', require('./auth'));
    router.use('/users', require('./user'));
    router.use('/donations', require('./donation'));
}