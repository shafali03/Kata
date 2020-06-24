
const people = [
  { name: 'Tim' },
  { name: 'Tom' },
  { name: 'Tony' }
]

// find the position of Tony

const tonyIndex = people.indexOf(person => person.name === 'Tony')
console.log(tonyIndex) //2


