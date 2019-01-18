import React, {Component} from 'react'
import Countdown from './Countdown/Countdown'
import styles from './SelectionBox.module.css'

export default class selectionBox extends Component {
    constructor(props) {
        super(props)
        this.child = React.createRef()
    }

    buyClicked = () => {
      this.child.current.startCountDown()
    }    

    render () {
        const animation = "card bg-light mb-3 " + styles.animated + " " + styles.bounce
        return (
            <div className={animation}
                style={{maxWidth: '400px', margin: 'auto'}}
                >
                <div className="card-header">
                    {this.props.title} Selection Box
                </div>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <p><strong>Type: </strong>{this.props.selectedRow[0]}</p>
                        <p><strong>Matching: </strong>{this.props.selectedRow[1]}</p>
                    </div>
                    <div className="col">
                        <p><strong>Price: </strong>{this.props.selectedRow[2]} IMI₵</p>
                        <p><strong>Delivery: </strong>{this.props.selectedRow[3]} s</p>
                    </div>  
                </div>
                <Countdown seconds={this.props.selectedRow[3]} ref={this.child}/>
            </div>
            </div> 
      )

    }
}