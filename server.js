const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})

app.use(express.static(__dirname + '/public'));


app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at https://localhost:${port}`)
})