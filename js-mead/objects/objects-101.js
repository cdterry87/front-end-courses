let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

let me = {
  name: 'Chase',
  age: 33,
  location: 'Memphis'
}

console.log(`${me.name} is ${me.age} and lives in ${me.location}`)
me.age++
console.log(`${me.name} is ${me.age} and lives in ${me.location}`)