import React, { Component } from 'react';
import { weatherZIP } from './config';

console.log(weatherZIP);

class WeatherWidget extends Component {
  render() {
    return (
      <div>
        { weatherZIP }
      </div>
    );
  }
}

export default WeatherWidget;
