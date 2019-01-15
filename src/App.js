import React, { Component } from 'react';
import './App.css';
import Radio from './components/Radio/Radio'

class App extends Component {
  dropChangeHandler = (e) => {
    console.log(e.target.value)
  }
  
  render() {
    return (
      <div className="App">
        <Radio dropChange={this.dropChangeHandler}></Radio>
        <button className="btn btn-primary">Prova</button>
      </div>
    );
  }
}

export default App;