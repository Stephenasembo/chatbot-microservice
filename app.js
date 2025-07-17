require('dotenv').config()
const express = require('express');
const ai = require('./services/ai.js')

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
  res.json('Welcome')
})

app.post('/', (req, res) => {
  res.json(`Data received. Your name is ${req.body.name}`)
})

app.post('/ai', async (req, res) => {
  const input = req.body.input;
  const response = await ai.generateResponse(input);
  res.json(response);
})
app.listen(PORT, () => {
  console.log(`The app is live on port: ${PORT}`)
})