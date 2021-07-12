const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.send('hello')

  console.log(request, response)
})

app.get('/contact', (request, response) => {
  response.send('Contact me @ test@example.com')
})

app.get('/about', (request, response) => {
  response.send('this is the about me page test')
})

app.get('/hobbies', (request, response) => {
  response.send('my hobbies page')
})

app.listen(8080, () => {
  console.log('Server started on port 8080')
})