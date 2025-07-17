require('dotenv').config()
const express = require('express');

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

app.listen(PORT, () => {
  console.log(`The app is live on port: ${PORT}`)
})