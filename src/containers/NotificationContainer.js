import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getValueFromState, stateKeys } from '../reducers/stateManager';
import { status as gameStatus } from '../game/data'
import { play } from '../game/index'
import Countdown from '../components/Countdown'
import { show } from '../actions';

class NotificationContainer extends Component {
  static propTypes = {
  }
  render() {
    const { status, user, cpu, onShow } = this.props
    let content

    if (status === gameStatus.COUNTDOWN) {
      content = <Countdown onComplete={onShow} />
    } else if (status === gameStatus.SHOW) {
      const winner = play(user, cpu)

      content = winner === user ? "Nailed it." : "Bad luck!"
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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer)