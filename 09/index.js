const addCounter = (list) => {
  list.push(0)
  return list
}

const testCounter = () => {
  const listBefore = []
  const listAfter = [0]

  deepFreeze(listBefore)

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter)
}

testCounter()
console.log('All tests passed.')
