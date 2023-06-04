const express = require('express');
const router = express.Router();

router.use('/blog', require('./module/blog'))

module.exports = router