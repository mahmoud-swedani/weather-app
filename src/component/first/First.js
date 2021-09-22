import React, { Component } from 'react'
import './First.css';

export default class First extends Component {
    render() {
        return (
            <form onSubmit={this.props.getweather}>
                <input type="text" placeholder="Entter your City:" id="City"/>
                <input type="text" placeholder="Entter your Country:" id="Country"/>
                <button>Get Data</button>
            </form>
        )
    }
}
