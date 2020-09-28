const todos = [
  {
    text: 'Buy groceries',
    completed: false
  },
  {
    text: 'Clean kitchen',
    completed: true
  },
  {
    text: 'Do work',
    completed: false
  },
  {
    text: 'Exercise',
    completed: true
  }
]

const filters = {
  searchText: ''
}

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
  })

  document.querySelector('#todos').innerHTML = ''

  const summary = document.createElement('p')
  summary.textContent = `You have ${incompleteTodos.length} todos left`
  document.querySelector('#todos').appendChild(summary)

  filteredTodos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('#todos').appendChild(p)
  })
}

renderTodos(todos, filters)

document.querySelector('#add-button').addEventListener('click', function (e) {
  console.log('Add a new todo')
})

document.querySelector('#add-input').addEventListener('input', function (e) {
  console.log(e.target.value)
})

document.querySelector('#search-input').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})