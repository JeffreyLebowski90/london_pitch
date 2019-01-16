import React from 'react'

const selectionBox = (props) => {
    return (
        <div className="card bg-light mb-3">
            <div className="card-header">
                {props.title} Selection Box
            </div>
        <div className="card-body">
            <div className="row">
                <div className="col">
                    <p><strong>Type: </strong>{props.selectedRow[0]}</p>
                    <p><strong>Price: </strong>{props.selectedRow[1]}</p>
                </div>
                <div className="col">
                    <p><strong>Matching: </strong>{props.selectedRow[2]}</p>
                    <p><strong>Delivery: </strong>{props.selectedRow[3]}</p>
                </div>  
            </div>
            <button className="btn btn-primary">Confirm</button>
        </div>
        </div> 
  )
}

export default selectionBox
