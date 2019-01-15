import React, {Component} from 'react'
import TableBody from '../TableBody/TableBody'

const sheets = [
    ["A5", "100%", "100 IMI₵", "30s"],
    ["A4", "100%", "200 IMI₵", "60s"],
    ["A3", "100%", "300 IMI₵", "90s"]
  ]
const pen = [
    ["red", "100%", "200 IMI₵", "30s"],
    ["green", "100%", "200 IMI₵", "30s"],
    ["blue", "100%", "200 IMI₵", "30s"]
  ]
const tape = [
    ["3m ©", "100%", "100 IMI₵", "60s"],
    ["IMI", "100%", "100 IMI₵", "60s"],
    ["paper", "100%", "100 IMI₵", "60s"]
  ]


class Table extends Component {
    test(selectedRow){
        console.log(selectedRow)
    }


    render() {
        let tBody = null
        switch (this.props.dropValue) {
            case "sheet":
                tBody = <TableBody selectClick={this.test}
                    data={sheets}/>
                break;
            case "pen":
                tBody = <TableBody selectClick={this.test}
                    data={pen}/>
                break;
            case "tape":
                tBody = <TableBody selectClick={this.test}
                    data={tape}/>
                break;        
            default:
                break;
        }
 
        return (
            <table className="table table-dark">
                <thead>
                    <tr>
                    <th scope="col">Number</th>
                    <th scope="col">Description</th>
                    <th scope="col">Matching</th>
                    <th scope="col">Price</th>
                    <th scope="col">Delivery</th>
                    <th scope="col">Select</th>
                    </tr>
                </thead>
                {tBody}
            </table>
        )
    }
}

export default Table
