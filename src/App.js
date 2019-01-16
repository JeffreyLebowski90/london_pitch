import React, { Component } from 'react';
import './App.css';
import Radio from './components/Radio/Radio'
import Table from './components/Table/Table'
import SelectionBox from './components/SelectionBox/SelectionBox'
import tables from './assets/tables'

class App extends Component {
  state = {
    dropValue: '',
    showTable: false,
    sheetRow: [],
    penRow: [],
    tapeRow: []
  }

  dropChangeHandler = (e) => {
    const dropValue = e.target.value
    this.setState({dropValue: dropValue})
  }

  buttonHandler = () => {
    const showTable = this.state.dropValue ? true : false
    this.setState({showTable: showTable})
  }

  selectClickHandler = (selectedRow) => {
    let selectedArray = []
    switch (this.state.dropValue) {
      case "sheet":
        selectedArray = {...tables.sheets[selectedRow]}
        this.setState({sheetRow: selectedArray})
        break;
      case "pen":
        selectedArray = {...tables.pen[selectedRow]}
        this.setState({penRow: selectedArray})
        break;
      case "tape":
        selectedArray = {...tables.tape[selectedRow]}
        this.setState({tapeRow: selectedArray})
        break;  
      default:
        break;
    }
  }
  
  
  render() {
    const table = this.state.showTable ? <Table
      dropValue={this.state.dropValue}
      selectClick={this.selectClickHandler} /> : null
    return (
      <div className="App">
        <Radio dropChange={this.dropChangeHandler}/>
        <button className="btn btn-primary" onClick={this.buttonHandler}>
          Search</button>
        {table}
        <SelectionBox title="Sheet"
          selectedRow={this.state.sheetRow}/>
        <SelectionBox title="Pen"
          selectedRow={this.state.penRow}/>
        <SelectionBox title="Tape"
          selectedRow={this.state.tapeRow}/>
      </div>
    );
  }
}

export default App;