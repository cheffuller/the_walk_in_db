module.exports = app => {  
    const company = require('../controllers/company.controller');
    var router = require('express').Router();  
    
    router.post('/', company.create);
    router.get('/', company.findAll);
    router.get('/:id', company.findOne);
    router.put('/:id', company.update);
    router.delete('/:id', company.delete);

    app.use('/api/company', router);
};