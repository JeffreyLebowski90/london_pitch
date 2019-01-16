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
    tapeRow: [],
    boxArray: [],
    toPay: 0
  }

  dropChangeHandler = (e) => {
    const dropValue = e.target.value
    this.setState({dropValue: dropValue, showTable: false})
  }

  buttonHandler = () => {
    const showTable = this.state.dropValue ? true : false
    this.setState({showTable: showTable})
  }

  selectClickHandler = (selectedRow) => {
    let selectedArray = []
    let boxArray = this.state.boxArray.slice()
    boxArray.unshift(this.state.dropValue)
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
    let toPay = this.state.toPay + selectedArray[2]
    console.log(toPay)
    this.setState({showTable: false, dropValue: '',
    boxArray: boxArray, toPay: toPay})
  }
    
  render() {
    const table = this.state.showTable ? <Table
      dropValue={this.state.dropValue}
      selectClick={this.selectClickHandler} /> : null
    const boxArray = this.state.boxArray.map((el) => {
      switch (el) {
        case "sheet":
          return <SelectionBox key={el} title="Sheet" selectedRow={this.state.sheetRow}/>
        case "pen":
          return <SelectionBox key={el} title="Pen" selectedRow={this.state.penRow}/>
        case "tape":
          return <SelectionBox key={el} title="Tape" selectedRow={this.state.tapeRow}/>
        default:
          return null
      }
    }
    )
    const reminder = this.state.boxArray.length < 3 ? <p
      style={{color: 'red', fontSize: '25px', fontWeight: 'bold'}}>
      You need { 3 - this.state.boxArray.length} more objects !</p> : <p></p>
    return (
      <div className="App">
        <Radio dropChange={this.dropChangeHandler}
          sheetRow = {this.state.sheetRow.length===0}
          penRow = {this.state.penRow.length===0}
          tapeRow = {this.state.tapeRow.length===0}
          value = {this.state.dropValue}/>
        <div style={{maxWidth: '500px', margin: 'auto'}}>
            <button className="btn btn-success" onClick={this.buttonHandler}>
              Search</button><br/><br/>
            <button className="btn btn-info btn-sm" >To Pay: {this.state.toPay} IMI₵</button>
        </div>
        {reminder}
        {table}
        <div>
        </div>
        {boxArray}
      </div>
    );
  }
}

export default App;