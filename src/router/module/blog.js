const express = require('express');
const route = express.Router();

const control = require('../../controller/BlogController');

route.post('/single', control.AddSingleImage)
route.post('/multi', control.AddMultiImage)
route.post('/unlink', control.Unlink)
route.post('/user', control.EncrytUser)

module.exports = route