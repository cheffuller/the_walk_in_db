module.exports = app => {  
    const delivery = require('../controllers/delivery.controller');
    var router = require('express').Router();  
    
    router.post('/', delivery.create);
    router.get('/', delivery.findAll);
    router.get('/:id', delivery.findOne);
    router.put('/:id', delivery.update);
    router.delete('/:id', delivery.delete);

    app.use('/api/delivery', router);
}