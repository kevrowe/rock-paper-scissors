import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

import NamePlate from './components/NamePlate'
import { getValueFromState, stateKeys } from './reducers/stateManager'
import NotificationContainer from './containers/NotificationContainer'
import PickSelector from './components/PickSelector'
import PickDisplay from './components/PickDisplay'
import { setUserPick } from './actions'
import { status as gameStatus } from './game/data'
import Score from './components/Score'

class App extends Component {
  renderPlayerUi() {
    const { status, onUserSelection, userPick } = this.props
    let Component, props

    switch (status) {
      case gameStatus.SELECT:
        Component = PickSelector
        props = { onSelect: onUserSelection }
        break
      case gameStatus.COUNTDOWN:
        Component = PickDisplay
        props = { animate: status === gameStatus.COUNTDOWN }
        break
      case gameStatus.SHOW:
        Component = PickDisplay
        props = { pick: userPick }
        break
      default:
        return null
    }

    return <Component {...props} />
  }
  render() {
    const { cpuPick, cpuScore, userScore, status } = this.props

    return (
      <div className="App grid">
        <NamePlate className="nameplate--cpu" name="CPU" />
        <PickDisplay
          cpu={true}
          pick={cpuPick}
          animate={status === gameStatus.COUNTDOWN}
        />
        <Score score={cpuScore} className="score--cpu" />
        <NotificationContainer />
        <Score score={userScore} />
        <NamePlate className="nameplate--user" name="Player 1" />
        {this.renderPlayerUi()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  status: getValueFromState(state, stateKeys.STATUS),
  userPick: getValueFromState(state, stateKeys.USER_PICK),
  userScore: getValueFromState(state, stateKeys.USER_SCORE),
  cpuPick: getValueFromState(state, stateKeys.CPU_PICK),
  cpuScore: getValueFromState(state, stateKeys.CPU_SCORE),
})

const mapDispatchToProps = dispatch => ({
  onUserSelection: (pick) => {
    dispatch(setUserPick(pick))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
