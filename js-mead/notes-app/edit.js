const id = location.hash.substring(1)
const notes = getSavedNotes()

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeButton = document.querySelector('#remove-note')


const note = notes.find((note) => {
  return note.id === id
})

if (!note) location.assign('/index.html')

titleElement.value = note.title
bodyElement.value = note.body

titleElement.addEventListener('input', (e) => {
  note.title = e.target.value
  saveNotes(notes)
})

bodyElement.addEventListener('input', (e) => {
  note.body = e.target.value
  saveNotes(notes)
})

removeButton.addEventListener('click', (e) => {
  removeNote(id)
  saveNotes(notes)
  location.assign('/index.html')
})