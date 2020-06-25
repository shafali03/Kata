

const getEvenNumber = require('../src/array-filter')

describe('Filter even numbers', () => {

  it('should only display even numbers', () => {
    expect(getEvenNumber([2, 4, 5, 6])).toEqual([2, 4, 6])
  })

})

