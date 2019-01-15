import React from 'react'
import TBSheet from '../TBSheet/TBSheet'

// const sheets = [
//     ["A5", "100%", "100 IMI₵", "60s", "" ],
//     ["A4", "100%", "200 IMI₵", "120s", "" ],
//     ["A3", "100%", "300 IMI₵", "180s", "" ]
//   ]


const table = () => {
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
                <TBSheet/>
            </table>
        )
    }

export default table
