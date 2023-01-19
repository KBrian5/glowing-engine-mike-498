const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World, my name is Kevin!')
})

app.listen(3000)