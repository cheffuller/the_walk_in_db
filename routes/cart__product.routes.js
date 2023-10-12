module.exports = app => {  
    const cart__product = require('../controllers/cart__product.controller');
    var router = require('express').Router();  
    
    router.post('/', cart__product.create);
    router.delete('/:id', cart__product.delete);

    app.use('/api/cart__product', router);
};