import { fromJS } from 'immutable'
import reducer from './gameReducer'
import { values as pick } from '../game/data'
import { setCpuPick, setUserPick, play, newRound, startGame } from '../actions'
import { setValueInState, getValueFromState, stateKeys } from '../reducers/stateManager'

describe('Game reducer', () => {
  let state

  beforeEach(() => {
    state = reducer(undefined, {})
  })

  it('starts game', () => {
    const newState = reducer(state, startGame())
    expect(getValueFromState(newState, stateKeys.STARTED)).toBe(true)
  })

  it('sets user pick to Rock', () => {
    const newState = reducer(state, setUserPick(pick.ROCK))
    expect(getValueFromState(newState, stateKeys.USER_PICK)).toBe(pick.ROCK)
  })

  it('sets cpu pick to Paper', () => {
    const newState = reducer(state, setCpuPick(pick.PAPER))
    expect(getValueFromState(newState, stateKeys.CPU_PICK)).toBe(pick.PAPER)
  })

  it('sets play to true', () => {
    const newState = reducer(state, play())
    expect(getValueFromState(newState, stateKeys.PLAY)).toBe(true)
  })

  it('updates user and cpu history with Rock and Paper respectively on game end', () => {
    state = setValueInState(state, stateKeys.USER_PICK, pick.ROCK)
    state = setValueInState(state, stateKeys.CPU_PICK, pick.PAPER)

    const newState = reducer(state, newRound())
    expect(getValueFromState(newState, stateKeys.USER_HISTORY).size).toBe(1)
    expect(getValueFromState(newState, stateKeys.USER_HISTORY).get(0)).toBe(pick.ROCK)
    expect(getValueFromState(newState, stateKeys.CPU_HISTORY).size).toBe(1)
    expect(getValueFromState(newState, stateKeys.CPU_HISTORY).get(0)).toBe(pick.PAPER)
  })

  it('clears user and cpu picks on game end', () => {
    state = setValueInState(state, stateKeys.USER_PICK, pick.ROCK)
    state = setValueInState(state, stateKeys.CPU_PICK, pick.PAPER)

    const newState = reducer(state, newRound())

    expect(getValueFromState(newState, stateKeys.CPU_PICK)).toBe(null)
    expect(getValueFromState(newState, stateKeys.USER_PICK)).toBe(null)
  })
})