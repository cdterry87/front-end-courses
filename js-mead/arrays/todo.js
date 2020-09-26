const todos = [
  'Get food',
  'Clean the house',
  'Work on code',
  'Exercise'
]

// delete the third item
todos.splice(2, 1)
// add a new item to the end
todos.push('Get some rest')
// remove the first item from the list
todos.shift()

console.log(`You have ${todos.length} todos!`)
todos.forEach(function (todo, index) {
  const num = index + 1
  console.log(`${num}. ${todo}`)
})

for (let count = 0; count < todos.length; count++) {
  const num = count + 1
  const todo = todos[count]
  console.log(`${num}. ${todo}`)
}