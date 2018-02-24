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
  STARTED:       'game.started',
  USER_NAME:     'game.user.name',
  USER_SCORE:    'game.user.score',
  USER_PICK:     'game.user.pick',
  USER_HISTORY:  'game.user.history',
  CPU_SCORE:     'game.cpu.score',
  CPU_PICK:      'game.cpu.pick',
  CPU_HISTORY:   'game.cpu.history',
  PLAY:          'game.play',
}