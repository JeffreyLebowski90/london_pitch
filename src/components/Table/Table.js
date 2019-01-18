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
                    <th scope="col"></th>
                    <th scope="col" style={{fontSize: '75%', padding: '12px 3px'}}>Description</th>
                    <th scope="col" style={{fontSize: '75%', padding: '12px 3px'}}>Matching</th>
                    <th scope="col" style={{fontSize: '75%', padding: '12px 3px'}}>Price</th>
                    <th scope="col" style={{fontSize: '75%', padding: '12px 3px'}}>Delivery</th>
                    <th scope="col" style={{fontSize: '75%', padding: '12px 3px'}}></th>
                    </tr>
                </thead>
                {tBody}
            </table>
        )
    }
}

export default Table
