const courseModel = require('../model/course.model');
const { uploadFile } = require('../services/imagekit.service')
const { uploadBufferToB2 } = require('../services/backblaze.service')

const createCourse = async (req, res) => {
    try {
        const { title, description, price, level, category } = req.body;
        const teacher = req.user.id;

        const file = req.file;
        const uploaded = await uploadFile({ buffer: file.buffer });

        const created = await courseModel.create({
            title, description, price, level, category, image: uploaded, teacher
        })
        return res.status(201).json({ message: 'course created successfully', data: created })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'internal server error' })
    }
}

const getCourses = async (req, res) => {
    try {
        const courses = await courseModel.find()
            .populate('teacher', "username email");

        if (!courses) {
            return res.status(401).json({ message: 'courses not found' })
        }

        return res.status(200).json({
            message: 'course fetch successfully',
            course: courses,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'internal server error' })
    }
}
const addLessons = async (req, res) => {
    try {
        const { topic, duration, assignment } = req.body;
        const file = req.file;

        let videoUrl = null;
        let videoKey = null;

        if (file) {
            // optional validation
            if (!file.mimetype.startsWith("video/")) {
                return res.status(400).json({ message: "Please upload a video file" });
            }

            const uploaded = await uploadBufferToB2({
                buffer: file.buffer,
                fileName: file.originalname,
                contentType: file.mimetype,
            });

            videoUrl = uploaded.url;
            videoKey = uploaded.key;
        }
        // const uploaded = await uploadFile({ buffer: file.buffer });
        console.log("-->",videoUrl);
        
        const course = await courseModel.findByIdAndUpdate(
            req.params.id,
            {
                $push: {
                    lesson: { topic, video: videoUrl,videoKey, duration, assignment }
                }
            },
            { new: true }
        )
        return res.status(200).json({
            message: 'lesson addded successfully',
            data: course
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'internal serval error' })

    }

}
module.exports = { createCourse, getCourses, addLessons }