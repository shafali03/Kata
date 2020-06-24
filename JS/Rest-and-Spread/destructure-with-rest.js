
const details = {
  firstName: 'Tim',
  lastName: 'Brad',
  gender: 'male'
}

const { firstName, ...rest } = details

console.log(firstName) // tim
console.log(rest) // {lastName: "Brad", gender: "male"}