import { results } from './data'

/**
 * Calculate the result of a game
 * @param {Any} a Player selection
 * @param {Any} b Player selection
 */
export const play = (a, b) => {
  if (a.get('pick') === b.get('pick')) {
    return false
  }

  const aWins = results[a.get('pick')][b.get('pick')] === 1

  return aWins ? a : b
}