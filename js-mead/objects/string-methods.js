let name = '  Chase  '

// length property
console.log(name.length)

// convert to uppercase
console.log(name.toUpperCase())

// conver to lowercase
console.log(name.toLowerCase())

let password = 'abc123asdf098'
console.log(password.includes('password'))

// trim
console.log(name.trim())

// challenge

// is valid password
let isValidPassword = function (password) {
  return password.length > 8 && !password.includes('password')
}

console.log('asdfp', isValidPassword('asdfp'))
console.log('abc123!@#&910fjdk', isValidPassword('abc123!@#&910fjdk'))
console.log('abcd3294password', isValidPassword('abcd3294password'))