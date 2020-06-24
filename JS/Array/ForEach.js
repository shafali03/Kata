const people = [
  { firstName: 'Benjamin', lastName: 'Franklin', yearOfDeath: 1790 },
  { firstName: 'Thomas', lastName: 'Edison', yearOfDeath: 1931 },
  { firstName: 'Franklin', lastName: 'Roosevelt', yearOfDeath: 1945 },
  { firstName: 'Abraham', lastName: 'Lincoln', yearOfDeath: 1865 },
  { firstName: 'Mother', lastName: 'Theresa', yearOfDeath: 1962 },
  { firstName: 'Mahatma', lastName: 'Gandhi', yearOfDeath: 1948 },
  { firstName: 'Winston', lastName: 'Churchill', yearOfDeath: 1965 },
  { firstName: 'Charles', lastName: 'Darwin', yearOfDeath: 1882 },
  { firstName: 'Albert', lastName: 'Einstein', yearOfDeath: 1955 },
  { firstName: 'Pablo', lastName: 'Picasso', yearOfDeath: 1973 },
  { firstName: 'Ludwig', lastName: 'Beethoven', yearOfDeath: 1827 },
  { firstName: 'Walt', lastName: 'Disney', yearOfDeath: 1966 },
  { firstName: 'Henry', lastName: 'Ford', yearOfDeath: 1947 },
  { firstName: 'Steve', lastName: 'Jobs', yearOfDeath: 2012 }
]


// Make array that contains first name

let firstName = []
people.forEach(person => {
  firstName.push(person.firstName)
})
console.log(firstName)

// [
//   'Benjamin', 'Thomas',
//   'Franklin', 'Abraham',
//   'Mother', 'Mahatma',
//   'Winston', 'Charles',
//   'Albert', 'Pablo',
//   'Ludwig', 'Walt',
//   'Henry', 'Steve'
// ]







// Make array that contains people that have died after 1950.


let diedAfter1950 = []

people.forEach(person => {
  if (person.yearOfDeath > 1950) {
    diedAfter1950.push(person)
  }
})

console.log(diedAfter1950)



// [
//   { firstName: 'Mother', lastName: 'Theresa', yearOfDeath: 1962 },
//   { firstName: 'Winston', lastName: 'Churchill', yearOfDeath: 1965 },
//   { firstName: 'Albert', lastName: 'Einstein', yearOfDeath: 1955 },
//   { firstName: 'Pablo', lastName: 'Picasso', yearOfDeath: 1973 },
//   { firstName: 'Walt', lastName: 'Disney', yearOfDeath: 1966 },
//   { firstName: 'Steve', lastName: 'Jobs', yearOfDeath: 2012 }
// ]





// Find index of Charles Darwin in the array.


let darwinIndex = -1

people.forEach((person, index) => {
  if (person.firstName === 'Charles' && person.lastName === 'Darwin') {
    darwinIndex = index
  }
})

console.log(darwinIndex) // 7


