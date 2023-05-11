module.exports= app=>{

    const produits=require('../controllers/produit.controller');
    const router = require('express').Router();
    router.get('/produits',produits.getAllProduit);
    router.post('/produits',produits.createProduit);
    //app.use('produits',router);
    app.use('/api', router);
}