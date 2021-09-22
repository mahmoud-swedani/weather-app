import React, { Component } from 'react'
import './App.css';
import First from './component/first/First';
import Weather from './component/weather/weather';
const API_KEYS = "8bf980554d32a3f67081ee04413d0ec1";
    // link = http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44

export default class App extends Component {
  state = {
    city:'',
    country:'',
    humidity:'',
    temp:'',
    description:'',
    error:'',
  }
  getWeather = async (e) =>  {
    e.preventDefault();
    const City = e.target.elements.City.value;
    const Country = e.target.elements.Country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${City}%2C${Country}&appid=${API_KEYS}`)
    const data = await api.json()
    console.log(data.weather[0].description)

    if(Country & City ) {
      this.setState({
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        temp:data.main.temp,
        description:data.weather[0].description,
        error:'',
      })
    }else{
      this.setState({
        city:'',
        country:'',
        humidity:'',
        temp:'',
        description:'',
        error:'',
      })
    }    
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