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

const incompleteTodos = todos.filter(function (todo) {
  return !todo.completed
})

const summary = document.createElement('p')
summary.textContent = `You have ${incompleteTodos.length} todos left`

todos.forEach(function (todo) {
  const p = document.createElement('p')
  p.textContent = todo.text
  document.querySelector('body').appendChild(p)
})

document.querySelector('body').appendChild(summary)

// Listen for new todo creation
document.querySelector('button').addEventListener('click', function (e) {
  console.log('Add a new todo')
})