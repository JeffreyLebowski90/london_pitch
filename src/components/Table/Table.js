import React, {Component} from 'react'
import TableBody from '../TableBody/TableBody'
import tables from '../../assets/tables'

class Table extends Component {
    test(selectedRow){
        console.log(selectedRow)
    }
    render() {
        let tBody = null
        switch (this.props.dropValue) {
            case "sheet":
                tBody = <TableBody selectClick={this.test}
                    data={tables.sheets}/>
                break;
            case "pen":
                tBody = <TableBody selectClick={this.test}
                    data={tables.pen}/>
                break;
            case "tape":
                tBody = <TableBody selectClick={this.test}
                    data={tables.tape}/>
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
