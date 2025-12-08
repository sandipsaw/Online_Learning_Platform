const courseModel = require('../model/course.model')
const { uploadImage } = require('../services/imagekit.service')
const createCourse = async (req, res) => {
    try {
        const { title, description, price, level, category } = req.body;
        const teacher = req.user.id;

        const images = await Promise.all((req.files || []).map(file => uploadImage({ buffer: file.buffer })))

        // console.log('files --> ',req.files);
        
        const created = await courseModel.create({
            title, description, price, level, category, image: images, teacher
        })
        return res.status(201).json({message:'course created successfully',data: created})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'internal server error'})
    }
}
module.exports = { createCourse }