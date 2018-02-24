import Rock from '../components/icons/rock'
import Paper from '../components/icons/paper'
import Scissors from '../components/icons/scissors'

const MAP = [
    Rock,
    Paper,
    Scissors
]

export const getIcon = value => {
    return MAP[value]
}