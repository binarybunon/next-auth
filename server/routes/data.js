const express = require('express');

const router = express.Router();

// middleware
const { requireSignin } = require('../middlewares');

// controllers
const { userList } = require('../controllers/data');

router.get('/data', userList);

module.exports = router;
