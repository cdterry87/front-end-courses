let greetUser = function () {
  console.log('Welcome user')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
  return num * num
}

let value1 = square(3)
let value2 = square(10)

console.log('value1', value1)
console.log('value2', value2)


let convertFahrenheitToCelsius = function (fahrenheit) {
  return ((fahrenheit - 32) * 5 / 9)
}

let fahrenheit = 72
let celsius = convertFahrenheitToCelsius(fahrenheit)

console.log(fahrenheit + ' degrees Fahrenheit is ' + celsius + ' degrees Celsius')