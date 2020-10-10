// Get saved todos
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos')
  return todosJSON ? JSON.parse(todosJSON) : []
}

// Hide completed todos
const hideCompleted = function (todos) {
  return todos.filter(function (todo) {
    return !todo.completed
  })
}

// Save todos
const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// Toggle todo
const toggleTodo = (todo) => {
  todo.completed = !todo.completed
}

// Remove todo by id
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => {
    return todo.id === id
  })

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
}

// Get the DOM elements for an individual todo
const generateTodoDOM = (todo) => {
  const todoElement = document.createElement('div')
  const checkbox = document.createElement('input')
  const todoText = document.createElement('span')
  const removeButton = document.createElement('button')

  // Setup checkbox
  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = todo.completed
  checkbox.addEventListener('change', (event) => {
    toggleTodo(todo)
    saveTodos(todos)
    renderTodos(todos, filters)
  })
  todoElement.appendChild(checkbox)

  // Setup todo text
  todoText.textContent = todo.text
  todoElement.appendChild(todoText)
  
  // Setup remove button
  removeButton.textContent = 'x'
  todoElement.appendChild(removeButton)
  removeButton.addEventListener('click', () => {
    removeTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  return todoElement
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement('p')
  summary.textContent = `You have ${incompleteTodos.length} todos left`
  return summary
}

// Render todos list
const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed

    return searchTextMatch && hideCompletedMatch
  })

  const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
  })

  document.querySelector('#todos').innerHTML = ''
  document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))
  filteredTodos.forEach(function (todo) {
    document.querySelector('#todos').appendChild(generateTodoDOM(todo))
  })
}