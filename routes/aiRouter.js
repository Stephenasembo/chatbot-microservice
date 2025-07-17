const router = require('express').Router();
const controller = require('../controllers/aiController')

router.post('/', controller.getResponse)

module.exports = router;