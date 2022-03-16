//Arquivo de rotas de acesso ao db
const express = require('express');

const routs  = express.Router()
const UserController = require('./controllers/UserController')

routs.get("/users", UserController['index']);

module.exports = routs;