import React, { Component } from 'react';
import {ThemeProvider} from "styled-components";

import { Button } from 'reactstrap';
import logo from './assets/keenLogo.png';
import './App.css';
import topFiller from "./components/topFiller";
//you are not importing topFiller or tagline because it was never exported properly
import tagline from "./components/tagline"


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TopFiller">
        </div>
        <img src={logo} alt="logo" />
        <h3 className="Tagline">find out if they like you back</h3>
        <div className="Filler">
          <h1 className= "NunitoWhite">Enter your email to join our beta!</h1>
          <form>
            <label className= "NunitoWhite">
              Email:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
