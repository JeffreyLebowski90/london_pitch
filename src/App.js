import React, { Component } from 'react';
import './App.css';
import Radio from './components/Radio/Radio'

class App extends Component {
  state = {
    dropValue: ''
  }

  dropChangeHandler = (e) => {
    const dropValue = e.target.value
    this.setState({dropValue: dropValue})
  }
  buttonHandler = () => {
    console.log(this.state.dropValue)
  }
  
  
  render() {
    return (
      <div className="App">
        <Radio dropChange={this.dropChangeHandler}></Radio>
        <button className="btn btn-primary" onClick={this.buttonHandler}>
          Prova</button>
      </div>
    );
  }
}

export default App;