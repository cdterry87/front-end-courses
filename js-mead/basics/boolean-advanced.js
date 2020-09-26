let isAccountLocked = false
let userRole = 'user'

if (isAccountLocked) {
  console.log('Account is locked')
} else if (userRole === 'admin') {
  console.log('Welcome admin')
} else {
  console.log('Welcome')
}

let temp = 45

if (temp <= 32) {
  console.log('It is freezing outside.')
} else if (temp >= 110) {
  console.log('It is hot outside.')
} else {
  console.log('Go for it. It is pretty nice out.')
}