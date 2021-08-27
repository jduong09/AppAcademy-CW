import React from 'react';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: null
    };
    this.pollWeather = this.pollWeather.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.pollWeather)
  }

  pollWeather(location) {
    const crd = location.coords;
    const apiKey = '************';  
    const myUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${apiKey}`;

    const request = new XMLHttpRequest();
    request.onload = () => {
      if(request.status >= 200 && request.status < 400) {
        //success
        const resp = JSON.parse(request.response);
        this.setState({weather: resp});
      } 
    };

    request.open('GET', myUrl, true);
    request.send();
  }

  render() {
    let content = <div></div>;

    if (this.state.weather) {
      const weather = this.state.weather;
      const temp = (weather.main.temp - 273.15) * 1.8 + 32;
      content = <div>
                  <p>{weather.name}</p>
                  <p>{temp.toFixed(1)} degrees</p>
                </div>;
    } else {
      content = <div className="loading">loading weather...</div>;
    }
    return (
      <div className="widget-weather">
        <h1>Weather</h1>
        <div className="weather">
          {content}
        </div>
      </div>
    );
  }
};