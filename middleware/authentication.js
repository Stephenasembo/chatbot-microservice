require('dotenv').config();
const microserviceApi = process.env.MICROSERVICE_API

function authenticateUser(req, res, next) {
  let token = req.headers.microservice_api;
  if(!token || !token.startsWith('Bearer')) {
    return res.status(401).json({
      success: false,
      error: 'Invalid authentication token.'
    })
  }
  token = token.split(' ')[1];
  if(token !== microserviceApi) {
    return res.status(401).json({
      success: false,
      error: 'Invalid authentication token.'
    })
  }
  return next()
}

module.exports = {
  authenticateUser,
}
