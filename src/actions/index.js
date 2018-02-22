import * as actionTypes from './types'

export const setUsername = username => ({
  type: actionTypes.setUsername,
  username
})

export const userPick = pick => ({
  type: actionTypes.userPick,
  pick
})

export const showPicks = () => ({
  type: actionTypes.showPicks
})

export const newRound = () => ({
  type: actionTypes.newRound
})