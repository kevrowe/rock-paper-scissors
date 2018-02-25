import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Score.css'

class Score extends Component {
    static propTypes = {
      score: PropTypes.number,
      className: PropTypes.string
    }
    render() {
      const { score, className, ...restProps } = this.props
      return (
        <div className={`score ${className}`} {...restProps}>{score}</div>
      )
    }
}

export default Score