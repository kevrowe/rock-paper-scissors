import { fromJS } from 'immutable'

import * as actionTypes from '../actions/types'
import { stateKeys, setValueInState, getValueFromState } from './stateManager'
import { status } from '../game/data';
import { play } from '../game';

const initialState = fromJS({
  status: status.SELECT,
  user: {
    score: 0,
  },
  cpu: {
    score: 0,
  }
})

const newRound = (state, action ) => {
  let newState = setValueInState(state, stateKeys.PLAY, false)

  newState = setValueInState(newState, stateKeys.USER_PICK, null)
  newState = setValueInState(newState, stateKeys.CPU_PICK, null)
  newState = setValueInState(newState, stateKeys.STATUS, status.SELECT)

  return newState
}

const calculateResult = (state, action) => {
  const currentCpuPick = parseInt(Math.random() * 3)
  const user = getValueFromState(state, stateKeys.USER)
  let scoreKey = false

  state = setValueInState(state, stateKeys.CPU_PICK, currentCpuPick)

  const winner = play(user, getValueFromState(state, stateKeys.CPU))
  if (winner) {
    scoreKey = winner === user ? stateKeys.USER_SCORE : stateKeys.CPU_SCORE
  }

  if (scoreKey) {
    const score = getValueFromState(state, scoreKey)
    state = setValueInState(state, scoreKey, score + 1)
  }

  state = setValueInState(state, stateKeys.STATUS, status.SHOW)
  return setValueInState(state, stateKeys.PLAY, true)
}

export default (state = initialState, action) => {
  let newState = state

  switch (action.type) {
    case actionTypes.startGame:
      return setValueInState(newState, stateKeys.STATUS, status.SELECT)
    case actionTypes.setCpuPick:
      return setValueInState(newState, stateKeys.CPU_PICK, action.pick.value)
    case actionTypes.setUserPick:
      newState = setValueInState(newState, stateKeys.STATUS, status.COUNTDOWN)
      return setValueInState(newState, stateKeys.USER_PICK, action.pick.value)
    case actionTypes.show:
      return calculateResult(newState, action)
    case actionTypes.newRound:
      return newRound(newState, action)
    default:
      return state
  }
}