import * as actionTypes from './types'

export const setUsername = username => ({
  type: actionTypes.setUsername,
  username
})

export const cpuPick = pick => ({
  type: actionTypes.cpuPick,
  pick
})

export const userPick = pick => ({
  type: actionTypes.userPick,
  pick
})

export const play = () => ({
  type: actionTypes.play
})

export const newRound = () => ({
  type: actionTypes.newRound
})