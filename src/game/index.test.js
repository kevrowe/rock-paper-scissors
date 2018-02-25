import { fromJS } from 'immutable'
import { play } from './index'
import { picks } from './data'

describe('Game engine', () => {
  it('a loses if A:Rock, B:Paper', () => {
    const b = fromJS({ pick: picks[1].value })
    const a = fromJS({ pick: picks[0].value })
    expect(play(a, b)).toBe(b)
  })

  it('a loses if A:Paper, B:Scissors', () => {
    const a = fromJS({ pick: picks[1].value })
    const b = fromJS({ pick: picks[2].value })
    expect(play(b, a)).toBe(b)
  })

  it('draw if A:Paper, B:Paper', () => {
    const a = fromJS({ pick: picks[1].value })
    const b = fromJS({ pick: picks[1].value })
    expect(play(a, b)).toBe(false)
  })

  it('draw if A:Scissors, B:Scissors', () => {
    const a = fromJS({ pick: picks[2].value })
    const b = fromJS({ pick: picks[2].value })
    expect(play(a, b)).toBe(false)
  })

  it('a wins if A:Paper, B:Rock', () => {
    const a = fromJS({ pick: picks[1].value })
    const b = fromJS({ pick: picks[0].value })
    expect(play(b, a)).toBe(a)
  })
})