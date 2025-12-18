const express = require('express');
const courseController = require('../Controller/course.controller')
const createAuthMiddleware = require('../Middleware/createAuth.middleware')
const authMiddleware = require('../Middleware/auth.middleware')
const router = express.Router();
const multer = require('multer');

const storage = multer.memoryStorage()
const upload = multer({
    storage
});

router.post('/', createAuthMiddleware(['teacher', 'admin']),
    upload.fields([
        { name: 'thumbnail', maxCount: 1 },
        { name: 'video', maxCount: 1 }
    ]), courseController.createCourse)

router.put('/:id/lesson', createAuthMiddleware(['teacher', 'admin']), upload.single('video'), courseController.addLessons)

router.get('/', authMiddleware.authMiddlewares, courseController.getCourses)
module.exports = router