const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send("Hello World from pooja's app!")
})

app.get('/about', (req, res) => {
  res.send("about response")
})

app.get('/contact', (req, res) => {
  res.send("contact response")
})

app.get('/help/:id', (req, res) => {
  res.send(`help response for ${req.params.id}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
