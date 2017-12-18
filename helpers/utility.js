var HttpStatus = require('http-status-codes'),
    config = require('config');
exports.checkUserRole = (req, res, next) => {

    switch (true) {
        case (req.baseUrl.includes('donations') && req.method == 'DELETE'):
            if (req.user.role == config.userRoles.ADMIN)
                next()
            else
                res.status(HttpStatus.UNAUTHORIZED).send('unauthorized');
            break;
        default:
            res.status(HttpStatus.UNAUTHORIZED).send('unauthorized');
            break;
    }

}