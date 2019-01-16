import React, {Component} from 'react'
import TableBody from '../TableBody/TableBody'
import tables from '../../assets/tables'

class Table extends Component {
    selectClick(selectedRow){
        // this.props.selectedRow = selectedRow
    }
    render() {
        let tBody = null
        switch (this.props.dropValue) {
            case "sheet":
                tBody = <TableBody selectClick={this.props.selectClick}
                    data={tables.sheets}/>
                break;
            case "pen":
                tBody = <TableBody selectClick={this.props.selectClick}
                    data={tables.pen}/>
                break;
            case "tape":
                tBody = <TableBody selectClick={this.props.selectClick}
                    data={tables.tape}/>
                break;        
            default:
                break;
        }
 
        return (
            <table className="table table-dark"
                style={{maxWidth: '600px', margin: 'auto',
                    marginBottom: '20px'}}>
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
