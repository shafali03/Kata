
const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]

for (const num of numbers) {
  console.log(num)
}
// 1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6





// Looping through the numbers.If the numbers are greater than 5

for (const nums of numbers) {
  if (nums > 5) console.log(num)
}

12
18
9
7
11
50
6








const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]


let array = []
for (const num of numbers) {
  if (num > 10) {
    array.push(num)
  }
}

console.log(array)

[12, 18, 11, 50]
