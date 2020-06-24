

const isValidWalk = require('../src/isValid')

describe('A ten minutes walk', () => {
  it('should arrive at the same place walking 10 blocks', () => {
    expect(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).toEqual(true)
  })

  it('should return false when passed more than 10 blocks', () => {
    expect(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])).toEqual(false)
  })

  it('should return true when arrive at same place when walk 10 block', () => {
    expect(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])).toEqual(true);
  })

  test('should return false when passed 1 block', () => {
    expect(isValidWalk(['w'])).toEqual(false)
  })

  test('should return false when passed 5 block', () => {
    expect(isValidWalk(['w', 'e', 'e', 's', 'n'])).toEqual(false)
  })
})

