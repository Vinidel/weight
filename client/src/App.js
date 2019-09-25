import React, { Component } from 'react';
import './App.css';
import TitleComponent from './components/TitleComponent';
import WeightComponent from './components/WeightComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
      <TitleComponent />
      <div className="App-content">
      <WeightComponent />
      </div>
    </div>
    );
  }
}

export default App;
