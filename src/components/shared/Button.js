import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Button.css'

class Button extends Component {
    static propTypes = {
        className: PropTypes.string,
        primary: PropTypes.bool,
    }
    render() {
        const { className, primary, ...restProps } = this.props
        const modifiers = primary ? 'rps-button--primary' : ''
        const mergedClassName = `rps-button ${modifiers} ${className}`

        return (
            <button
                className={mergedClassName}
                {...restProps}
            >
                {this.props.children}
            </button>
        )
    }
}

export default Button