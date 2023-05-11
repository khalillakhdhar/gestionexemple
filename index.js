// importation d'express mongoose et body-parser
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;
// connexion à la base de données
mongoose.connect('mongodb://localhost:27017/name',
 { useNewUrlParser: true, useUnifiedTopology: true });