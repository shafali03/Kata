
const filter_list = require('../src/filter')

describe('Filter numbers', () => {

  it('should only display numbers [1, 2]', () => {
    expect(filter_list([1, 2, 'a', 'b'])).toEqual([1, 2])
  })

  it('should only display number [1, 0, 15]', () => {
    expect(filter_list([1, 'a', 'b', 0, 15])).toEqual([1, 0, 15])
  })

  it('should ony display numbers [1, 2, 123]', () => {
    expect(filter_list([1, 2, 'aasf', '1', '123', 123])).toEqual([1, 2, 123])
  })
})


