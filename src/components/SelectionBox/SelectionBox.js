import React from 'react'
import Countdown from './Countdown/Countdown'
import styles from './SelectionBox.module.css'

const selectionBox = (props) => {
    const animation = "card bg-light mb-3 " + styles.animated + " " + styles.bounce
    return (
        <div hidden={props.selectedRow.length===0}
            className={animation}
            style={{maxWidth: '400px', margin: 'auto'}}
            >
            <div className="card-header">
                {props.title} Selection Box
            </div>
        <div className="card-body">
            <div className="row">
                <div className="col">
                    <p><strong>Type: </strong>{props.selectedRow[0]}</p>
                    <p><strong>Matching: </strong>{props.selectedRow[1]}</p>
                </div>
                <div className="col">
                    <p><strong>Price: </strong>{props.selectedRow[2]}</p>
                    <p><strong>Delivery: </strong>{props.selectedRow[3]}s</p>
                </div>  
            </div>
            <Countdown seconds={props.selectedRow[3]}/>
        </div>
        </div> 
  )
}

export default selectionBox
