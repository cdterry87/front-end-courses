const notes = getSavedNotes()

const filters = {
  searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', (e) => {
  const id = uuidv4()
  notes.push({
    id,
    title: '',
    body: ''
  })

  saveNotes(notes)
  location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-input').addEventListener('input', (e) => {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
  console.log(e.target.value)
})