const router = require('express').Router();
const controller = require('../controllers/aiController');
const { authenticateUser } = require('../middleware/authentication');

router.post('/', authenticateUser, controller.getResponse)

module.exports = router;