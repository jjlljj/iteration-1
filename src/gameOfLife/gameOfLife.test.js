import { cell, gameOfLife, buildGame } from './gameOfLife'

describe.skip('gameOfLife', () => {
  it('buildGame should build the array of game cells with the expected length', () => {
    const result = buildGame(10)
    const expected = 100

    expect(result.length).toEqual(expected)
  })
})
