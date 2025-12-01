const express = require('express')
const validator = require('../Middleware/validator.middleware')
const authController = require('../Controller/auth.controller')
const router = express.Router();

router.post('/register',validator.registerUserValidation,authController.registerUser)

module.exports = router