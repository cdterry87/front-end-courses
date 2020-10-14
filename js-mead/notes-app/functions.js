// Read existing notes from local storage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes')
  return notesJSON ? JSON.parse(notesJSON) : []
}

// Save a note
const saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note from the list
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => {
    return note.id === id
  })

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
  }
}

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
  const noteElement = document.createElement('div')
  const textElement = document.createElement('a')
  const button = document.createElement('button')

  // Setup remove note button
  button.textContent = 'x'
  noteElement.appendChild(button)
  button.addEventListener('click', (event) => {
    removeNote(note.id)
    saveNotes(notes)
    renderNotes(notes, filters)
  })

  // Setup note title text
  textElement.setAttribute('href', `/edit.html#${note.id}`)
  textElement.textContent = note.title.length ? note.title : 'Unnamed note'

  noteElement.appendChild(textElement)

  return noteElement
}

// Render application notes
const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector('#notes').innerHTML = ''

  filteredNotes.forEach((note) => {
    const noteElement = generateNoteDOM(note)
    document.querySelector('#notes').appendChild(noteElement)
  })
}