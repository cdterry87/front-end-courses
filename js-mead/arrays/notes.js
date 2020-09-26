// const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift()) // removes first item from the array and returns removed item
// notes.unshift('My first note') // adds value as the first item in the array

// notes.splice(1, 1, 'This is the new second note') // Remove specified item from the array (start, number of items to remove, add a new item at this point)

// notes[2] = 'Updated third note'

// notes.forEach(function (item, index) {
//   console.log(index, item)
// })

// for (let count = 0; count <= 2; count++) {
//   console.log(count)
// }

// for (let count = 0; count < notes.length; count++) {
//   console.log(notes[count])
// }

// console.log(notes.indexOf('Note 2'))

const notes = [
  {},
  {
    title: 'My next trip',
    body: 'I want to go to Japan'
  },
  {
    title: 'Habits to work on',
    body: 'Building my coding skills'
  },
  {
    title: 'Office modification',
    body: 'Get a new chair'
  }
]

// console.log({} === {})

// let someObject = {}
// let otherObject = someObject

// console.log(someObject === otherObject)

const index = notes.findIndex(function (note, index) {
  return note.title === 'Habits to work on'
})
console.log('index', index)

// console.log(notes.length)
// console.log(notes)