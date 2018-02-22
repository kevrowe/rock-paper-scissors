import { fromJS } from 'immutable'

import * as actionTypes from '../actions/types'
import { stateKeys, setValueInState } from './stateManager'

const initialState = fromJS({ user: { name: 'initial' } })

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.setUsername:
      return setValueInState(state, stateKeys.USER_NAME, action.username)
    default:
      return state
  }
}