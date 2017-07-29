import React, { Component } from 'react';
import ClockPanel from './ClockPanel.js'
import WeatherWidget from './WeatherWidget.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClockPanel />
        <WeatherWidget />
      </div>
    );
  }
}

export default App;
