import React, { Component } from 'react';
import './App.css';
import Radio from './components/Radio/Radio'
import Table from './components/Table/Table'

class App extends Component {
  state = {
    dropValue: '',
    showTable: false
  }

  dropChangeHandler = (e) => {
    const dropValue = e.target.value
    this.setState({dropValue: dropValue})
  }

  buttonHandler = () => {
    const showTable = this.state.dropValue ? true : false
    this.setState({showTable: showTable})
  }  
  
  render() {
    const table = this.state.showTable ? <Table dropValue={this.state.dropValue}/> : null

    return (
      <div className="App">
        <Radio dropChange={this.dropChangeHandler}/>
        <button className="btn btn-primary" onClick={this.buttonHandler}>
          Prova</button>
        {table}
      </div>
    );
  }
}

export default App;