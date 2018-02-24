import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { startGame } from '../actions'

import Button from '../components/shared/Button'

class SplashContainer extends Component {
  static propTypes = {
    onStartGame: PropTypes.func,
  }
  render() {
    return (
      <div className="splash">
        <h1>Rock, Paper, Scissors!</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate eius, molestias facilis laborum illum soluta omnis esse saepe vitae vero iste odit, magnam deserunt impedit veritatis ratione pariatur doloremque voluptates.</p>
        <Button
          primary={true}
          onClick={this.props.onStartGame}
        >
          Let's do this!
        </Button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onStartGame: () => {
    dispatch(startGame())
  }
})

export default connect(null, mapDispatchToProps)(SplashContainer)