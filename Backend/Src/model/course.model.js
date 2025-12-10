const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    video:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,
        default:0,
    },
    assignment:{
        type:String,
    }
})
const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    level: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: [{
        url: String,
        thumbnail: String,
        id: String
    }],
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    lesson: [lessonSchema]
}, { timestamps: true })

const courseModel = mongoose.model('course', courseSchema);

module.exports = courseModel;