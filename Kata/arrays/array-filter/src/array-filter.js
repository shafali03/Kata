// JavaScript Arrays support a filter function (starting in JavaScript 1.6).Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2, 4, 5, 6]) // should == [2,4,6]



const getEvenNumber = require('../src/isValid')

it('should only display even numbers', () => {
  expect(getEvenNumber([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6,])
})


