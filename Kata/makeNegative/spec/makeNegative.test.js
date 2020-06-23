const makeNegative = require('../src/makeNegative')


describe('MakeNegative', () => {

  it('should return negative number "-1" ', () => {
    expect(makeNegative(1)).toBe(-1)
  })

  it('should return negative number "-5"', () => {
    expect(makeNegative(-5)).toBe(-5)
  })

  test('should return zero "0"', () => {
    expect(makeNegative(0)).toBe(0)
  })

  test('should return negative number "-0.12"', () => {
    expect(makeNegative(0.12)).toBe(-0.12)
  })

})