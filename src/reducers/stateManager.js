export const getValueFromState = (state, key) => {
  return state.getIn(parseKey(state, key))
}

export const setValueInState = (state, key, value) => {
  return state.setIn(parseKey(state, key), value)
}

export const parseKey = (state, key) => {
  const keySlugs = key.split('.')

  if (state.has(keySlugs[0])) {
    return keySlugs
  }

  return keySlugs.slice(1)
}

export const stateKeys = {
  STATUS:        'game.status',
  USER:          'game.user',
  USER_NAME:     'game.user.name',
  USER_SCORE:    'game.user.score',
  USER_PICK:     'game.user.pick',
  CPU:           'game.cpu',
  CPU_SCORE:     'game.cpu.score',
  CPU_PICK:      'game.cpu.pick',
  PLAY:          'game.play',
}