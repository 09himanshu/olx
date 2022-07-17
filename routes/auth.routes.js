
const controller = require('../controller/user.controller');
const {verifyAuth} = require('../middleware')

module.exports = (app) => {
    app.post('/api/v1/signup', [verifyAuth.authVerify], controller.signup);

    app.post('/api/v1/signin', controller.signin);
}