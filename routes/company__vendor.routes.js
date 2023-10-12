module.exports = app => {  
    const company__vendor = require('../controllers/company__vendor.controller');
    var router = require('express').Router();  
    
    router.post('/', company__vendor.create);
    router.delete('/:id', company__vendor.delete);

    app.use('/api/company__vendor', router);
};