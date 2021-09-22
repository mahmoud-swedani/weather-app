import React, { Component } from 'react'
import './App.css';
import First from './component/first/First';
import Weather from './component/weather/weather';

export default class App extends Component {

  getWeather = (e) =>  {
    e.preventDefault();
    console.log("welcome to weather app")
  }
  render() {
    return (
      <div className="App">
      <First getweather={this.getWeather}/>
      <Weather  />
    </div>
    )
  }
}