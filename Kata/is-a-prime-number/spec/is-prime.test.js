
const isPrime = require('../src/is-prime')

describe('Prime number is true', () => {

  it('should be false for "0"', () => {
    expect(isPrime(0)).toEqual(false)
  })

  it('should be false for "1"', () => {
    expect(isPrime(1)).toEqual(false)
  })

  it('should be true for "2"', () => {
    expect(isPrime(2)).toEqual(true)
  })
})