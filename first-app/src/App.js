import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FullName from "./FullName";
import Welcome from"./Welcome";
import Style from"./Style";
import Stateful from"./Stateful";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <FullName/>
         
        </header>
         <Welcome/>
          <Style/>
          <Stateful/>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
