import React from 'react'

const selectionBox = () => {
    return (
        <div className="card bg-light mb-3">
            <div className="card-header">
                Featured
            </div>
        <div className="card-body">
            <div className="row">
                <div className="col">
                    <p><strong>Sheet: </strong>test_1</p>
                    <p><strong>Price: </strong>test_2</p>
                </div>
                <div className="col">
                    <p><strong>Matching: </strong>test_3</p>
                    <p><strong>Delivery: </strong>test_4</p>
                </div>  
            </div>
            <button className="btn btn-primary">Confirm</button>
        </div>
        </div> 
  )
}

export default selectionBox
