const notes = [
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

// const findNote = function (notes, noteTitle) {
//   const index = notes.findIndex(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })
//   return notes[index]
// }

const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

const findNotes = function (notes, searchTerm) {
  return notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(searchTerm.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(searchTerm.toLowerCase())
    
    return isTitleMatch || isBodyMatch
  })
}

// console.log(findNotes(notes, 'japan'))
// const note = findNote(notes, 'office modification')
// console.log(note)

const sortNotes = function (notes) {
  notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1
    } else {
      return 0
    }
  })
}

sortNotes(notes)
console.log(notes)