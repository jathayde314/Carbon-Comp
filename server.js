const express = require('express')
const port = 3000
const routes = require('./app.js')
var bodyParser = require('body-parser')
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})

app.use('/', routes);

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at https://localhost:${port}`)
})