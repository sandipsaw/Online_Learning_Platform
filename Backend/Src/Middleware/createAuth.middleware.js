const jwt = require('jsonwebtoken')

const createAuthMiddleware = (roles = ['student']) => {
    return authMiddleware = async (req, res, next) => {
        const token = req.cookies?.token 

        if(!token) {
            return res.status(401).json({ message: 'unAuthorization: token not found'})
        }
        try {
            const decoded = await jwt.verify(token, process.env.JWT_SECRET)
            if (!roles.includes(decoded.role)) {
                return res.status(403).json({ message: 'forbidden insufficient permission' })
            }
            req.user = decoded
            // console.log("user-->",decoded);
            
            next()
        } catch (error) {
            console.log(error);
            return res.status(401).json({ message: 'unAuthorized Invalid' })

        }
    }
}
module.exports = createAuthMiddleware