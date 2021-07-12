const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (request, response) => {
  return response.sendFile(`${__dirname}/index.html`)
})

app.post('/', (request, response) => {
  const { number1, number2 } = request.body
  const sum = Number(number1) + Number(number2)

  response.send(`${number1} + ${number2} = ${sum}`)
})

app.get('/bmicalculator', (request, response) => {
  return response.sendFile(`${__dirname}/bmiCalculator.html`)
})

app.post('/bmicalculator', (request, response) => {
  let { height, weight } = request.body
  height = Number(height)
  weight = Number(weight)

  const bmi = ((weight / (height * height)) * 703).toFixed(1)

  response.send(`<p>Height: ${height}in</p><p>Weight: ${weight}lbs</p><p>Your BMI is <strong>${bmi}</strong></p>`)
})

app.listen(8080, () => {
  console.log('Server started on port 8080')
})