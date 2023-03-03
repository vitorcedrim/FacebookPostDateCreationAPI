const express = require('express')
const app = express()
const port = 25565

app.get('/', (req, res) => {
  res.send('Hello World2!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})