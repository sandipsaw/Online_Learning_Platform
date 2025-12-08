const mongoose = require('mongoose');

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
        required: true
    }
})

const courseModel = mongoose.model('course', courseSchema);

module.exports = courseModel;