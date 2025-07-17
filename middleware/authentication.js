require('dotenv').config();
const secretKey = process.env.JWT_SECRET;

const jwt = require('jsonwebtoken');

function authenticateUser(req, res, next) {
  let token = req.headers.authorization;
  if(!token || !token.startsWith('Bearer')) {
    return res.status(401).json({
      success: false,
      error: 'Invalid authentication token.'
    })

  }

  token = (token.split(' '))[1]

  jwt.verify(token, secretKey, (err, data) => {
    if(err) {
      console.error(err);
      res.status(401).json({
        success: false,
        error: 'Invalid authentication token.'
      })
      return null;
    } else {
      req.user = data;
      return next();
    }
  })
}

module.exports = {
  authenticateUser,
}
