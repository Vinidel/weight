import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PingComponent from './components/PingComponent';
import WeightComponent from './components/WeightComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Deploy React + Go to Heroku using Docker
        </p>
      </header>
      <PingComponent />
      <WeightComponent />
    </div>
    );
  }
}

export default App;
