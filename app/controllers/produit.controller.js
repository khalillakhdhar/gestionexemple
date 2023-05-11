// importation de produit.model
const Produit = require('../models/produit.model');
exports.createProduit= (req,res) => {
    const produit=new Produit(req.body);
    produit.save().then((data)=>{
        res.send(data);

    }

    ).catch((err) => {
        res.send(err.message);
    });
    

}