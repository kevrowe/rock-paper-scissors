import { play } from './index'
import { values } from './data'

describe('Game engine', () => {
  it('a loses if A:Rock, B:Paper', () => {
    const a = { name: 'player a', value: values.ROCK }
    const b = { name: 'player b', value: values.PAPER }
    expect(play(a, b)).toBe(b)
  })

  it('a loses if A:Paper, B:Scissors', () => {
    const a = { name: 'player a', value: values.PAPER }
    const b = { name: 'player b', value: values.SCISSORS }
    expect(play(b, a)).toBe(b)
  })

  it('draw if A:Paper, B:Paper', () => {
    const a = { name: 'player a', value: values.PAPER }
    const b = { name: 'player b', value: values.PAPER }
    expect(play(a, b)).toBe(false)
  })

  it('draw if A:Scissors, B:Scissors', () => {
    const a = { name: 'player a', value: values.SCISSORS }
    const b = { name: 'player b', value: values.SCISSORS }
    expect(play(a, b)).toBe(false)
  })

  it('a wins if A:Paper, B:Rock', () => {
    const a = { name: 'player a', value: values.PAPER }
    const b = { name: 'player b', value: values.ROCK }
    expect(play(b, a)).toBe(a)
  })
})