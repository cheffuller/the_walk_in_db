module.exports = app => {  
    const address = require('../controllers/address.controller');
    var router = require('express').Router();  
    
    router.post('/', address.create);
    router.put('/:id', address.update);
    router.delete('/:id', address.delete);

    app.use('/api/company', router);
};