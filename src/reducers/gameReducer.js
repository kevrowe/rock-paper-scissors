import { fromJS } from 'immutable'

import * as actionTypes from '../actions/types'
import { stateKeys, setValueInState, getValueFromState } from './stateManager'
import { status } from '../game/data';

const initialState = fromJS({
  status: status.INIT,
  user: {
    history: [],
  },
  cpu: {
    history: [],
  }
})

const newRound = (state, action ) => {
  let newState = setValueInState(state, stateKeys.PLAY, false)

  const userHistory = getValueFromState(newState, stateKeys.USER_HISTORY)
  const cpuHistory = getValueFromState(newState, stateKeys.CPU_HISTORY)
  const currentsetUserPick = getValueFromState(newState, stateKeys.USER_PICK)
  const currentsetCpuPick = getValueFromState(newState, stateKeys.CPU_PICK)

  newState = setValueInState(newState, stateKeys.USER_HISTORY, userHistory.push(currentsetUserPick))
  newState = setValueInState(newState, stateKeys.CPU_HISTORY, cpuHistory.push(currentsetCpuPick))

  newState = setValueInState(newState, stateKeys.USER_PICK, null)
  newState = setValueInState(newState, stateKeys.CPU_PICK, null)

  return newState
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
      newState = setValueInState(newState, stateKeys.STATUS, status.SHOW)
      return setValueInState(newState, stateKeys.PLAY, true)
    case actionTypes.newRound:
      return newRound(newState, action)
    default:
      return state
  }
}