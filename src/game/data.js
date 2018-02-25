export const status = {
  SELECT: 1,
  COUNTDOWN: 2,
  SHOW: 3
}

export const picks = [
  {
    value: 0,
    name: 'Rock'
  },
  {
    value: 1,
    name: 'Paper'
  },
  {
    value: 2,
    name: 'Scissors'
  }
]

export const results = [
      //  R   P   S
	/*R*/ [-1,  0,  1],
	/*P*/ [ 1, -1,  0],
	/*S*/ [ 0,  1, -1]
]