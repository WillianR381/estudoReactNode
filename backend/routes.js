const express = require('express');
const route = express.Router();

const homeControllers = require('./Controllers/homeControllers');

route.get('/', homeControllers.getHome);


module.exports = route;