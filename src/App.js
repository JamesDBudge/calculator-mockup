import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';
import TopBar from './components/TopBar';
import DoubleWideButton from './components/DoubleWideButton';
import DarkButton from './components/DarkButton';
import ClearButton from './components/ClearButton';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ""
    }
    this.concatonateInput = this.concatonateInput.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  concatonateInput(value) {
    this.setState({input: this.state.input + value})
  }

  handleClear() {
    this.setState({input: ''})
  }

  render() { 
    return (
      <div className="App">
        <div className="calc-wrapper">
        <TopBar></TopBar>
        <Screen input={this.state.input}></Screen>
        <div className="row">
            <ClearButton handleClear={this.handleClear}>AC</ClearButton>
            <DarkButton handleClick={this.concatonateInput}>+/-</DarkButton>
            <DarkButton handleClick={this.concatonateInput}>%</DarkButton>
            <Button handleClick={this.concatonateInput}>÷</Button>
          </div>
          <div className="row">
            <Button handleClick={this.concatonateInput}>7</Button>
            <Button handleClick={this.concatonateInput}>8</Button>
            <Button handleClick={this.concatonateInput}>9</Button>
            <Button handleClick={this.concatonateInput}>X</Button>
          </div>
          <div className="row">
            <Button handleClick={this.concatonateInput}>4</Button>
            <Button handleClick={this.concatonateInput}>5</Button>
            <Button handleClick={this.concatonateInput}>6</Button>
            <Button handleClick={this.concatonateInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.concatonateInput}>1</Button>
            <Button handleClick={this.concatonateInput}>2</Button>
            <Button handleClick={this.concatonateInput}>3</Button>
            <Button handleClick={this.concatonateInput}>+</Button>
          </div>
          <div className="row">
            <DoubleWideButton handleClick={this.concatonateInput}>0</DoubleWideButton>
            <Button handleClick={this.concatonateInput}>.</Button>
            <Button handleClick={this.concatonateInput}>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
