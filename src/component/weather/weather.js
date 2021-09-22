import React, { Component } from 'react'
import './weather.css';

export default class weather extends Component {
    render() {
        return (
            <div>
                { this.props.city && <p>city: { this.props.city }</p>}
                { this.props.country && <p>country: { this.props.country }</p>}
                { this.props.humidity && <p>humidity: { this.props.humidity }</p>}
                { this.props.temp && <p>temp: { this.props.temp}</p>}
                { this.props.description && <p>description: { this.props.description }</p>}
                { this.props.error && <p>error: { this.props.error }</p>}
            </div>
        )
    }
}
