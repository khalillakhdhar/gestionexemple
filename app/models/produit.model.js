// mongoose schema produit : titre , prix , quantite, description
// importation de mongoose
const mongoose = require('mongoose');
// déclaration de schema
const Schema = mongoose.Schema;
let ProduitSchema = new Schema(
    {
        titre: { type: String, required: true },
        description: String,
        quantite:{type:Number,required: true },
        prix:{type:Number,required: true },
        
    }
)
module.exports = ProduitSchema=mongoose.model('produit',ProduitSchema)