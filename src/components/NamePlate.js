import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './NamePlate.css'

export default class NamePlate extends Component {
  static propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
  }
  render() {
    const { name, className, ...restProps } = this.props

    return (
      <div className={`nameplate ${className}`} {...restProps}>
        {name}
      </div>
    );
  }
}