const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World, my name is Kevin!')
})

app.listen(PORT)