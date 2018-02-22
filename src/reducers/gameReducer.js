import { fromJS } from 'immutable'

import * as actionTypes from '../actions/types'
import { stateKeys, setValueInState, getValueFromState } from './stateManager'

const initialState = fromJS({
  user: {
    history: [],
  },
  cpu: {
    history: [],
  }
})

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.setUsername:
      return setValueInState(state, stateKeys.USER_NAME, action.username)
    case actionTypes.setCpuPick:
      return setValueInState(state, stateKeys.CPU_PICK, action.pick)
    case actionTypes.setUserPick:
      return setValueInState(state, stateKeys.USER_PICK, action.pick)
    case actionTypes.play:
      return setValueInState(state, stateKeys.PLAY, true)
    case actionTypes.newRound:
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
    default:
      return state
  }
}