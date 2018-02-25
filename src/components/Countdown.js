import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Countdown extends Component {
  static propTypes = {
    onComplete: PropTypes.func,
  }
  constructor(props) {
    super(props)

    this.state = {
      count: 3
    }
  }
  render() {
    setTimeout(() => {
      if (this.state.count > 1) {
        this.setState({
          count: this.state.count - 1
        })
      } else {
        this.props.onComplete()
      }
    }, 1000)

      return (
        <div className="countdown">
        {this.state.count}
        </div>
      )
    }
  }

  export default Countdown