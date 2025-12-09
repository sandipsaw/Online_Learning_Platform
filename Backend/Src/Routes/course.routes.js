const express = require('express');
const courseController = require('../Controller/course.controller')
const createAuthMiddleware = require('../Middleware/createAuth.middleware')
const authMiddleware = require('../Middleware/auth.middleware')
const router = express.Router();
const multer = require('multer')

const storage = multer.memoryStorage()
const upload = multer({storage});

router.post('/',createAuthMiddleware(['teacher','admin']),upload.single('thumbnail'),courseController.createCourse)
router.get('/',authMiddleware.authMiddlewares,courseController.getCourses)
module.exports = router