const toggleTodo = (todo) => {
  return Object.assign({}, todo, {
    completed: !todo.completed
  })
  // Or, ES7 object...spread
  // https://babeljs.io/docs/plugins/preset-stage-2/
  // return {
  //   ...todo,
  //   completed: !todo.completed
  // }
}

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  }
  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  }

  deepFreeze(todoBefore)

  expect(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter)
}

testToggleTodo()
console.log('All tests passed.')
