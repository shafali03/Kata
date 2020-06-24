
const person = {
  firstName: 'shaf',
  lastName: 'Ahmed'
}

const { firstName, lastName } = person

console.log(firstName) // shaf
console.log(lastName) // Ahmed






// Destructuring function arguments

const scores = [100, 99, 94]
const firstThree = ([first, second, third]) => {
  return {
    first: first,
    second: second,
    third: third
  }
}

console.log(firstName(scores))

// {
//   first: 100,
//   second: 99,
//   third: 98
// }

