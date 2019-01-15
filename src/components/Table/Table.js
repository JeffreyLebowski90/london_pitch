import React, {Component} from 'react'
import TBsheet from '../TBs/TBsheet'
import TBpen from '../TBs/TBpen'
import TBtape from '../TBs/TBtape'

// const sheets = [
//     ["A5", "100%", "100 IMI₵", "60s", "" ],
//     ["A4", "100%", "200 IMI₵", "120s", "" ],
//     ["A3", "100%", "300 IMI₵", "180s", "" ]
//   ]


class Table extends Component {
    render() {
        let tBody = null

        switch (this.props.dropValue) {
            case "sheet":
                tBody = <TBsheet/>
                break;
            case "pen":
                tBody = <TBpen/>
                break;
            case "tape":
                tBody = <TBtape/>
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
