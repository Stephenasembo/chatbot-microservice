const { validationRules, validationErrorHandling } = require('../middleware/inputValidation')
const ai = require('../services/ai')

module.exports = {
  getResponse: [validationRules, async (req, res) => {
    console.log('hello')
    const isError = validationErrorHandling(req, res);
    if (isError) {
      return;
    }
    const input = req.body.input;
    const response = await ai.generateResponse(input);
    if(response) {
      return res.status(200).json({success: true, data: response})
    }
    return res.status(500).json({
      success: false,
      error: 'An internal error occured.'
    })}]
}