require('dotenv').config()
const express = require('express');
const aiRouter = require('./routes/aiRouter')
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors())
app.get('/', (req, res) => {
  res.json('Welcome')
})

app.use('/ai', aiRouter)

app.listen(PORT, () => {
  console.log(`The app is live on port: ${PORT}`)
})
