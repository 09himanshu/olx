
const controller = require('../controller/item.controller');
const {verifyJwt, verifyItem} = require('../middleware')

module.exports = (app) => {
    app.post('/api/v1/items', [verifyJwt.jwtVerify, verifyItem.verifyItem], controller.create);

    app.get('/api/v1/items/:id', [verifyJwt.jwtVerify], controller.getItem);

    app.delete('/api/v1/items/:id', [verifyJwt.jwtVerify], controller.delete);
}