import { fromJS } from 'immutable'
import reducer from './gameReducer'
import { picks, status } from '../game/data'
import { setCpuPick, setUserPick, show, newRound, startGame } from '../actions'
import { setValueInState, getValueFromState, stateKeys } from '../reducers/stateManager'

describe('Game reducer', () => {
  let state

  beforeEach(() => {
    state = reducer(undefined, {})
  })

  it('startGame switches game status to SELECT', () => {
    const newState = reducer(state, startGame())
    expect(getValueFromState(newState, stateKeys.STATUS)).toBe(status.SELECT)
  })

  it('sets user pick to Rock', () => {
    const newState = reducer(state, setUserPick(picks[0]))
    expect(getValueFromState(newState, stateKeys.USER_PICK)).toBe(picks[0].value)
  })

  it('setting user pick sets game status to COUNTDOWN', () => {
    const newState = reducer(state, setUserPick(picks[0]))
    expect(getValueFromState(newState, stateKeys.STATUS)).toBe(status.COUNTDOWN)
  })

  it('sets cpu pick to Paper', () => {
    const newState = reducer(state, setCpuPick(picks[1]))
    expect(getValueFromState(newState, stateKeys.CPU_PICK)).toBe(picks[1].value)
  })

  it('sets play to true', () => {
    state = setValueInState(state, stateKeys.USER_PICK, picks[0].value)

    const newState = reducer(state, show())
    expect(getValueFromState(newState, stateKeys.PLAY)).toBe(true)
  })

  it('clears user and cpu picks on game end', () => {
    state = setValueInState(state, stateKeys.USER_PICK, picks[0])
    state = setValueInState(state, stateKeys.CPU_PICK, picks[1])

    const newState = reducer(state, newRound())

    expect(getValueFromState(newState, stateKeys.CPU_PICK)).toBe(null)
    expect(getValueFromState(newState, stateKeys.USER_PICK)).toBe(null)
  })
})