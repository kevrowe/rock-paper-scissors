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

export const play = () => ({
  type: actionTypes.play
})

export const newRound = () => ({
  type: actionTypes.newRound
})