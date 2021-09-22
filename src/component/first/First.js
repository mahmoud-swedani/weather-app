import React, { Component } from 'react'
import './First.css';

export default class First extends Component {
    render() {
        return (
            <form onSubmit={this.props.getweather}>
                <input type="text" placeholder="Entter your City:" name="City"/>
                <input type="text" placeholder="Entter your Country:" name="Country"/>
                <button>Get Data</button>
            </form>
        )
    }
}
