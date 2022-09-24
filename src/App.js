import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';

class App extends Component {

  render() {
    function hello(){
      alert('Hello');
    }
    return (
      <div className="App">
        <button onClick={hello}>Hello</button>
        <Map />
      </div>
    );
  }
}

export default App;
