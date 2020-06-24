const fruitBasket = {
  apple: 2,
  orange: 1,
  banana: 3
}

const fruits = Object.entries(fruitBasket)
fruits.forEach(([fruit, num]) => {
  console.log(`There are ${num} ${fruit}s in the fruitBasket `)
})


// There are 2 apples in the fruitBasket
// There are 1 oranges in the fruitBasket
// There are 3 bananas in the fruitBasket 