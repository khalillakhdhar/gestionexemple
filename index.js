// importation d'express mongoose et body-parser
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;
// connexion à la base de données
mongoose.connect('mongodb+srv://khalillakhdhar:Jahealx3IoYtRVOT@cluster0.lhgfryr.mongodb.net/?retryWrites=true&w=majority',
 { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((err) => console.log('Connexion à MongoDB échouée !'+ err));
 
 