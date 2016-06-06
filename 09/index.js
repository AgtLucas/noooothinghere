const addCounter = (list) => {
  // return list.concat([0])
  return [...list, 0]
}

const removeCounter = (list, index) => {
  // return list
  //   .slice(0, index)
  //   .concat(list.slice(index + 1))
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ]
}

const testCounter = () => {
  const listBefore = []
  const listAfter = [0]

  deepFreeze(listBefore)

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter)
}

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20]
  const listAfter = [0, 20]

  deepFreeze(listBefore)

  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter)
}

testCounter()
console.log('All tests passed.')
