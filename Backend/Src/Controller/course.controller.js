const courseModel = require('../model/course.model');
const userModel = require('../model/userModels');
const { uploadImage } = require('../services/imagekit.service')
const createCourse = async (req, res) => {
    try {
        const { title, description, price, level, category } = req.body;
        const teacher = req.user.id;

        const file = req.file;
        const uploaded = await uploadImage({ buffer: file.buffer });

        // console.log('files --> ',file);

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
       console.log(courses);
       
        return res.status(200).json({
            message: 'course fetch successfully',
            course: courses,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'internal server error'})
    }
}
module.exports = { createCourse, getCourses }