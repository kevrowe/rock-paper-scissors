import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

import NamePlate from './components/NamePlate'
import { getValueFromState, stateKeys } from './reducers/stateManager'
import SplashContainer from './containers/SplashContainer'
import NotificationContainer from './containers/NotificationContainer'
import PickSelector from './components/PickSelector'
import PickDisplay from './components/PickDisplay'
import { show, setUserPick } from './actions'
import { status as gameStatus } from './game/data'
import CPUInterface from './components/CPUInterface'

class App extends Component {
  renderPlayerUi() {
    const { status, onUserSelection, userPick } = this.props
    let Component, props

    if (status === gameStatus.SELECT) {
      Component = PickSelector
      props = { onSelect: onUserSelection }
    } else if (status === gameStatus.SHOW) {
      Component = PickDisplay
      props = { pick: userPick }
    } else {
      return null
    }

    return <Component {...props} />
  }
  render() {
    if (this.props.status === gameStatus.INIT)
      return <SplashContainer />

    return (
      <div className="App">
        <CPUInterface />
        <NotificationContainer />
        {this.renderPlayerUi()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  status: getValueFromState(state, stateKeys.STATUS),
  userPick: getValueFromState(state, stateKeys.USER_PICK)
})

const mapDispatchToProps = dispatch => ({
  onUserSelection: (pick) => {
    dispatch(setUserPick(pick))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
