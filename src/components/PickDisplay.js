import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Rock from './icons/rock'

import './PickDisplay.css'
import { getIcon } from '../game/iconManager';

class PickDisplay extends Component {
  static propTypes = {
    pick: PropTypes.number,
    cpu: PropTypes.bool,
    animate: PropTypes.bool,
  }
  render() {
    const {pick, cpu, animate} = this.props
    let Icon = Rock
    let dynamicClass = ''

    if (typeof pick === 'number') {
      Icon = getIcon(pick)
      dynamicClass += 'pick-display--show'
    }

    if (animate) {
      dynamicClass += ' pick-display--pulse'
    }

    dynamicClass += cpu ? ' pick-display--cpu' : ''

    return (
      <div className={`pick-display ${dynamicClass}`}>
        <Icon />
      </div>
    )
  }
}

export default PickDisplay