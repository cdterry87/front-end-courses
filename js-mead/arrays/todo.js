const todos = [
  {
    text: 'Wake up',
    completed: true
  },
  {
    text: 'Start working',
    completed: true
  },
  {
    text: 'Buy food',
    completed: false
  },
  {
    text: 'Exercise',
    completed: false,
  },
  {
    text: 'Get some rest',
    completed: false
  }
]

const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    if (!a.completed && b.completed) {
      return -1
    } else if (!b.completed && a.completed) {
      return 1
    } else {
      return 0
    }
  })
}

const deleteTodo = function (todos, text) {
  const index = todos.findIndex(function (todo, index) {
    return todo.text.toLowerCase() === text.toLowerCase()
  })
 
  if (index > -1) todos.splice(index, 1)
}

// deleteTodo(todos, 'buy food')

const getThingsToDo = function (todos) {
  return todos.filter(function (todo) {
    return !todo.completed
  })
}

sortTodos(todos)

console.log(getThingsToDo(todos))

console.log(todos)