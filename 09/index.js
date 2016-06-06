const addCounter = (list) => {
  return list.concat([0])
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
