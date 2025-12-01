const userModel = require('../model/userModels')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {
    const { username, email, password, fullname: { firstname, lastname }, role } = req.body;
    const isUser = await userModel.findOne({
        $or: [
            { username }, { email }
        ]
    })
    if (isUser) {
        return res.status(409).json({ message: "user already exists" })
    }
    const hashPassword = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        email,
        password: hashPassword,
        fullname: { firstname, lastname },
        role
    })
    const token = jwt.sign({
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
    }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.cookie('token', token, {
        maxage: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true
    })
    res.status(201).json({
        message: "user registered successfully",
        user: {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
            fullname: user.fullname
        }
    })
}

const loginUser = async (req, res) => {
    const { identifier, password } = req.body;

    const user = await userModel.findOne({
        $or: [
            { username: identifier }, { email: identifier }
        ]
    }).select('+password')

    if (!user) {
        return res.status(400).json({ message: "user not found" })
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return res.status(401).json({ message: 'wrong password' });
    }

    const token = jwt.sign({
        id: user._id,
        username: user.username,
        email: user.email,
        fullname: user.fullname,
        role: user.role
    }, process.env.JWT_SECRET, { expiresIn: '1d' })

    res.cookie('token', token, {
        maxage: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true
    })

    res.status(201).json({
        message: "user login successfully",
        user
    })
}
const getUser = async(req,res) =>{
    const user = req.user;
    if(!user){
        return res.status(401).json({message:"unauthorized"})
    }
    res.status(201).json({
        message:"user fetch successfully",
        user
    })
}

module.exports = { registerUser, loginUser ,getUser}