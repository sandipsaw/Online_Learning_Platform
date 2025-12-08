const express = require('express');
const courseController = require('../Controller/course.controller')
const createAuthMiddleware = require('../Middleware/createAuth.middleware')
const router = express.Router();
const multer = require('multer')

const storage = multer.memoryStorage()
const upload = multer({storage});

router.post('/',createAuthMiddleware(['teacher','admin']),upload.array('images',2),courseController.createCourse)

module.exports = router