import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NamePlate extends Component {
  static propTypes = {
    username: PropTypes.string
  }
  render() {
    return (
      <div className="nameplate">
        {this.props.username}
      </div>
    );
  }
}