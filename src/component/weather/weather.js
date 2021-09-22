import React, { Component } from 'react'
import './weather.css';

export default class weather extends Component {
    render() {
        return (
            <div className="info">
                { this.props.city && <p className="info-key">city: <span className="info-value">{ this.props.city }</span> </p>}
                { this.props.country && <p className="info-key">country: <span className="info-value"> { this.props.country }</span></p>}
                { this.props.humidity && <p className="info-key">humidity: <span className="info-value">{ this.props.humidity }</span> </p>}
                { this.props.temp && <p className="info-key">temp: <span className="info-value">{ this.props.temp}</span> </p>}
                { this.props.description && <p className="info-key">description: <span className="info-value">{ this.props.description }</span> </p>}
                { this.props.error && <p className="info-key">error: <span className="info-value">{ this.props.error }</span> </p>}
            </div>
        )
    }
}
