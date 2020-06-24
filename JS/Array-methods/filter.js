

// Filter through the array make a list of number bigger than ten


const number = [1, 2, 34, 65, 7, 5, 22, 4, 3, 44, 33]

const biggerThan10 = number.filter(num => {
  if (num > 10) return true
})

console.log(biggerThan10)
[34, 65, 22, 44, 33]


