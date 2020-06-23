// Loop through an array created with Object.keys

const fruitBasket = {
  apple: 2,
  orange: 4,
  banana: 1,
}

const fruits = Object.keys(fruitBasket)
fruits.forEach(fruit => {
  console.log(`There are ${fruit} in the basket`)
})

// There are apple in the basket
// There are orange in the basket
// There are banana in the basket