require('dotenv').config()
const express = require('express');
const ai = require('./services/ai.js');
const { body, validationResult } = require('express-validator')

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const validateInput = [
  body('input')
    .trim()
    .notEmpty()
    .withMessage('Input can not be empty')
]

app.get('/', (req, res) => {
  res.json('Welcome')
})

app.post('/', (req, res) => {
  res.json(`Data received. Your name is ${req.body.name}`)
})

app.post('/ai', validateInput, async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      error: errors.array(),
    })
  }
  const input = req.body.input;
  const response = await ai.generateResponse(input);
  if(response) {
    return res.status(200).json({success: true, data: response})
  }
  return res.status(500).json({
    success: false,
    error: 'An internal error occured.'
  })
})

app.listen(PORT, () => {
  console.log(`The app is live on port: ${PORT}`)
})
