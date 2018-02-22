import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setUsername } from '../actions'
import { stateKeys, getValueFromState } from '../reducers/stateManager'

class Name extends Component {
  render() {
    return (
      <div>
        <p>name: {this.props.username}</p>
        <input type="text" onChange={e => this.props.setUsername(e.target.value) } />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: getValueFromState(state, stateKeys.USER_NAME)
  }
}

const mapDispatchToProps = dispatch => ({
  setUsername: username => {
    dispatch(setUsername(username))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Name);