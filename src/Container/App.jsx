import React, { Component } from 'react';
import cloneDeep from "clone-deep";
import './App.css';
import Locations from '../Components/Locations'

class App extends Component {
  state={
    location:"",
    coordinates:""
  }

  locationHandler = (location) =>{
    let loc = cloneDeep(this.state);
    loc = location;
    this.setState({location:loc});
    this.setState({coordinates:""});
    console.log(loc);
}

coordinatesHandler = (coordinates) =>{
  console.log(coordinates);
  this.setState({coordinates});
}

  render() {
    return (
      <div className="App">
        <div className='Title'>
          <h1>Weather App</h1>
        </div>
       <div className="Body">
          <Locations location={this.state.location} coordinates={this.state.coordinates} onClick={{onLocation:this.locationHandler, onCoordinates:this.coordinatesHandler}}/>
       </div>
      </div>
    );
  }
}

export default App;
