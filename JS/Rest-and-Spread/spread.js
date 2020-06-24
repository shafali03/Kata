
// Spread an array

const array = ['one', 'two', 'three']
console.log(...array)

// one two three



// Concatenate array with spread

const one = [1, 2, 3]
const two = [4, 5, 6]

const combined = [...one, ...two]
console.log(combined)

[1, 2, 3, 4, 5, 6]




// Use the rest operator as a function argument

const addThemup = (...args) => {
  console.log(...args)
}



// Example of all argument into an array using rest

const logName = (...names) => {
  names.forEach(name => console.log(name))
}

logName('Tom', 'Bill', 'Jess', 'Alex', 'Ben')

Tom
Bill
Jess
Alex
Ben






