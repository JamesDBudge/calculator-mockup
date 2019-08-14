import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';
import TopBar from './components/TopBar';
import DoubleWideButton from './components/DoubleWideButton'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "0"
    }
  }
  render() { 
    return (
      <div className="App">
        <div className="calc-wrapper">
        <TopBar></TopBar>
        <Screen input={this.state.input}></Screen>
        <div className="row">
            <Button>AC</Button>
            <Button>+/-</Button>
            <Button>%</Button>
            <Button>÷</Button>
          </div>
          <div className="row">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>X</Button>
          </div>
          <div className="row">
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>-</Button>
          </div>
          <div className="row">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>
          </div>
          <div className="row">
            <DoubleWideButton>0</DoubleWideButton>
            <Button>.</Button>
            <Button>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
