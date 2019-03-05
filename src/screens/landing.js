import React, { Component } from 'react';
import {ThemeProvider} from "styled-components";

import { Button } from 'reactstrap';
import logo from '../assets/keenLogo.png';
import '../App.css';
import TopFiller from "../components/TopFiller";
import Filler from "../components/Filler";
import Tagline from "../components/Tagline"
import NunitoWhite from "../components/NunitoWhite"


export default class landing extends Component {
  render() {
    return (
      <div>
        <TopFiller></TopFiller>
        <img src={logo} alt="logo" />
        <Tagline>find out if they like you back</Tagline>
          <Filler>
            <NunitoWhite>Enter your email to join our beta!</NunitoWhite>
          <form>
            <label className= "NunitoWhite">
              Email:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </Filler>

      </div>
    );
  }
}
