const express = require('express');
const router = express.Router();
const { signIn } = require('../controllers/controllerauth');

router.post('/signin', signIn);

module.exports = router;
