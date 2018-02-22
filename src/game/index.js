import { values, results } from './data'

/**
 * Calculate the result of a game
 * @param {Any} a Player selection
 * @param {Any} b Player selection
 */
export const play = (a, b) => {
  if (a.value === b.value) {
    return false
  }

  const aWins = results[a.value][b.value] === 1

  return aWins ? a : b
}