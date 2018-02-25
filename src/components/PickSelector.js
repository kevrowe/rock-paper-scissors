import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { Map } from 'immutable'

import { picks } from '../game/data'
import { getIcon } from '../game/iconManager'

import './PickSelector.css'

class PlayerUI extends Component {
    static propTypes = {
        cpu: PropTypes.bool,
        player: PropTypes.instanceOf(Map),
        onSelect: PropTypes.func,
    }
    renderOption = (option) => {
        const Icon = getIcon(option.value)
        const dynamicClass = option.value === 0 ? 'pick-list__item--rock' : ''

        return (
            <li
                key={option.name}
                tabIndex={0}
                className={`pick-list__item ${dynamicClass}`}
                onKeyDown={e => { if (e.keyCode === 13) this.props.onSelect(option) }}
                onClick={_ => { this.props.onSelect(option) }}
            >
                <Icon />
            </li>
        )
    }
    render() {
        return (
            <ul className="pick-list">
                {picks.map(this.renderOption)}
            </ul>
        )
    }
}

export default PlayerUI