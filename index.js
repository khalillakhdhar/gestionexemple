// importation d'express mongoose et body-parser
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;
// connexion à la base de données
mongoose.connect('mongodb+srv://khalillakhdhar:Jahealx3IoYtRVOT@cluster0.lhgfryr.mongodb.net/test?retryWrites=true&w=majority',

 { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((err) => console.log('Connexion à MongoDB échouée !'+ err));
// utilisation de body-parser
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
app.get('/',(req,res)=>{
    res.send('Hello world');
})
// importation des routage
require('./app/routes/produit.route')(app);
// écoute du serveur
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
 