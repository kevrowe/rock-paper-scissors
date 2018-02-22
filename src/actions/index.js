import * as actionTypes from './types'

export const setUsername = username => ({
  type: actionTypes.setUsername,
  username
})

export const setCpuPick = pick => ({
  type: actionTypes.setCpuPick,
  pick
})

export const setUserPick = pick => ({
  type: actionTypes.setUserPick,
  pick
})

export const play = () => ({
  type: actionTypes.play
})

export const newRound = () => ({
  type: actionTypes.newRound
})