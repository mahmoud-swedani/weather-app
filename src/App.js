import React, { Component } from 'react'
import './App.css';
import First from './component/first/First';
import Weather from './component/weather/weather';

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <First />
      <Weather />
    </div>
    )
  }
}