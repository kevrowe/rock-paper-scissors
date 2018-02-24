import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { getIcon } from '../game/iconManager'

class History extends Component {
    static propTypes = {
        items: PropTypes.array,
        label: PropTypes.string,
    }
    constructor(props) {
        super(props);

        this.state = {}
    }
    renderItem(item) {
        const Icon = getIcon(item.value)

        return (
            <li className="history__item">
                {Icon}
            </li>
        )
    }
    render() {
        const { icon, label } = this.props
        return (
            <div>
                <h3>{label}</h3>
                <ul>
                    {items.map(this.renderItem)}
                </ul>
            </div>
        )
    }
}

export default History