const notes = [
  {
    title: 'My next trip',
    body: 'I want to go to Japan'
  },
  {
    title: 'Habits to work on',
    body: 'Exercise and eating better'
  },
  {
    title: 'Office modification',
    body: 'Get a new seat'
  }
]

const filters = {
  searchText: ''
}

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector('#notes').innerHTML = ''

  filteredNotes.forEach(function (note) {
    const noteElement = document.createElement('p')
    noteElement.textContent = note.title
    document.querySelector('#notes').appendChild(noteElement)
  })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
  e.target.textContent = 'It worked'
})

document.querySelector('#remove-notes').addEventListener('click', function () {
  document.querySelectorAll('.note').forEach(function (note) {
    note.remove()
  })
})

document.querySelector('#search-input').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})