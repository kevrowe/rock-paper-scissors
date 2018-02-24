import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

import NamePlate from './components/NamePlate'
import { getValueFromState, stateKeys } from './reducers/stateManager';
import SplashContainer from './containers/SplashContainer';

class App extends Component {
  render() {
    if (!this.props.started)
      return <SplashContainer />

    return (
      <div className="App">
        <NamePlate />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  started: getValueFromState(state, stateKeys.STARTED)
})

export default connect(mapStateToProps)(App);
