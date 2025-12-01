const userModel = require('../model/userModels')

 const registerUser = () =>{
    const {username,email,password,fullname:{firstname,lastname},role} = req.body()
}
module.exports = {registerUser}