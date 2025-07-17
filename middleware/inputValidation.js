const { body, validationResult } = require('express-validator')

const validationRules = [
  body('input')
    .trim()
    .notEmpty()
    .withMessage('Input can not be empty')
]

const validationErrorHandling = (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    res.status(400).json({
      success: false,
      error: errors.array(),
    })
    return 'Error found'
  }
  return null;
}

module.exports = {
  validationRules,
  validationErrorHandling,
}