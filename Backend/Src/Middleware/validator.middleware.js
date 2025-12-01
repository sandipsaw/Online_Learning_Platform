const { body, validationResult } = require('express-validator');

const responeWithValidationErrors =(req,res,next) =>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }
    next()
}
const registerUserValidation = [
    body('username')
        .isString()
        .withMessage('username must be string')
        .isLength({ min: 3 })
        .withMessage('username must be at least 3 character long'),
    body('email')
        .isEmail()
        .withMessage('invalid email address'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('password must be at least 6 charachter long'),
    body('fullname.firstname')
        .isString()
        .withMessage('firstname must be string')
        .notEmpty()
        .withMessage('firstname is required'),
    body('fullname.lastname')
        .isString()
        .withMessage('lastname must be string')
        .notEmpty()
        .withMessage('lastname is required'),
    body('role')
        .isEmpty()
        .withMessage('role is required'),

    responeWithValidationErrors    
]

module.exports = {registerUserValidation};