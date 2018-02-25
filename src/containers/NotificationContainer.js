import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getValueFromState, stateKeys } from '../reducers/stateManager';
import { status as gameStatus } from '../game/data'
import { play } from '../game/index'
import Countdown from '../components/Countdown'
import { show, newRound } from '../actions';
import Button from '../components/shared/Button'

import './NotificationContainer.css'

class NotificationContainer extends Component {
  renderEndRound(winner, user) {
    let text

    if (!winner) {
      text = "DRAW"
    } else {
      text = winner === user ? "Nailed it!" : "Unlucky"
    }

    if (!text)
      return null

    return (
      <div key="content" className="notification__content">
        {text}
      </div>
    )
  }
  render() {
    const { status, user, cpu, onShow } = this.props
    let content = []

    switch(status) {
      case gameStatus.SELECT:
        content = <div className="notification__content">Select your weapon!</div>
        break
      case gameStatus.COUNTDOWN:
        content = <Countdown onComplete={onShow} />
        break
      case gameStatus.SHOW:
        const winner = play(user, cpu)

        content.push(this.renderEndRound(winner, user))
        content.push(<Button
            key="newround"
            className="new-round"
            onClick={this.props.onNewRound}
          >
            Again!
          </Button>
        )
        break
      default:
        break
    }

    return (
      <div className="notification">
        {content}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  status: getValueFromState(state, stateKeys.STATUS),
  user: getValueFromState(state, stateKeys.USER),
  cpu: getValueFromState(state, stateKeys.CPU)
})

const mapDispatchToProps = dispatch => ({
  onShow: () => {
    dispatch(show())
  },
  onNewRound: () => {
    dispatch(newRound())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer)