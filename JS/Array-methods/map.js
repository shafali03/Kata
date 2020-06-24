// Multiply each item by 5

const number = [1, 2, 34, 65, 7, 5, 22, 4, 3, 44, 33]
const multipliedBy5 = number.map(num => {
  return num * 5
})

console.log(multipliedBy5)

// [5, 10, 170, 325, 35, 25, 110, 20, 15, 220, 165 ]








// Modify the the array and array a string I need to 

const todo = ["buy eggs", "feed the dog", "water the plant"]


const todoStrings = todo.map(todos => `I need to ${todos}`)


console.log(todoStrings)

[
  'I need to buy eggs',
  'I need to feed the dog',
  'I need to water the plant'
]








// Chaining array method

// Multiply the number and get the number between 20 and 40


const number = [1, 2, 4, 65, 7, 6, 22, , 3, 5, 33]

const result = number.map(num => num * 5)
  .filter(num => num >= 20 && num <= 40)

console.log(result)

// [20, 35, 30, 25]