const reverseWords = require('../src/reverse-word')

describe('ReversWord', () => {

  it('should return reverse words sentence', () => {
    expect(reverseWords('The quick brown fox jumps over the lazy dog.')).toEqual('ehT kciuq nworb xof spmuj revo eht yzal .god')
  })

  it('should return reverse for apple', () => {
    expect(reverseWords('apple')).toEqual('elppa')
  })

  it('should return reverse letters', () => {
    expect(reverseWords('a b c d')).toEqual('a b c d')
  })

  it('should return reverse words', () => {
    expect(reverseWords('double  spaced  words')).toEqual('elbuod  decaps  sdrow')
  })
})