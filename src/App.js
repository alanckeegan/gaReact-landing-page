import React, { Component } from 'react';

import { Button } from 'reactstrap';
import logo from './assets/keenLogo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div className="App">
        <img src={logo} alt="logo" />
        <h1 className="Tagline">find out if they like you back</h1>
        <button> Button </button>
      </div>
      <div className="Filler">
      </div>
      </div>




    );
  }
}

export default App;
