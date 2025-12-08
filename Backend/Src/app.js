const express = require('express')
const authRoutes = require('./Routes/auth.route')
const courseRoutes = require('./Routes/course.routes')
const cookieParser = require('cookie-parser')
const cors = require("cors");

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(cookieParser())
app.use(express.json());

app.use('/api/auth',authRoutes)
app.use('/api/course',courseRoutes)

module.exports = app