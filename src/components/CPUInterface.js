import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Rock from './icons/rock'

import './CPUInterface.css'

class CPUInterface extends Component {
    static propTypes = {
    }
    constructor(props) {
        super(props)

        this.state = {}
    }
    render() {
        return (
            <div className="cpu-interface">
                <div className="cpu-hidden">
                    <Rock />
                </div>
            </div>
        )
    }
}

export default CPUInterface