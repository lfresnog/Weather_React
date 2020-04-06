import React, { Component } from 'react';
import './App.css';
import Locations from '../Components/Locations'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='Title'>
          <h1>Weather App</h1>
        </div>
       <div className="Body">
          <Locations/>
       </div>
      </div>
    );
  }
}

export default App;
