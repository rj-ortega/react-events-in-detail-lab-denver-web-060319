import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    constructor(props) {
        super(props)
    }
    handleClick = (event) => {
        const coords = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coords)
    }
    render() {
        return (
            <button onClick={this.handleClick}>Coords</button>
        )
    }
}
