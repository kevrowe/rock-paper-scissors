import * as actionTypes from './types'

export const startGame = () => ({
  type: actionTypes.startGame
})

export const setCpuPick = pick => ({
  type: actionTypes.setCpuPick,
  pick
})

export const setUserPick = pick => ({
  type: actionTypes.setUserPick,
  pick
})

export const show = () => ({
  type: actionTypes.show
})

export const newRound = () => ({
  type: actionTypes.newRound
})