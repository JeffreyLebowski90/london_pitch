import React, { Component } from 'react'
import styles from '../SelectionBox.module.css'

export default class Countdown extends Component {
    constructor(props){
        super(props)
        this.id = ''
    }
    state = {
        seconds: 0,
        alreadyConfirmed: false,
        hideDel: false
    }

    tick = () => {
        if(this.state.seconds > 0){
            const sec = this.state.seconds - 1
            this.setState({seconds: sec})
        }
        else
        {
            clearInterval(this.id)
        }
    }

    startCountDown = () => {
        if(this.props.seconds > 0){
            this.id = setInterval(this.tick, 1000)
            this.setState({seconds: this.props.seconds,
                alreadyConfirmed: true})
        }
    }

    hideDelivery = () => {
        this.setState({hideDel: true})
    }

  render() {
      const delivery = this.state.seconds > 0 ? <p 
        className={styles.animated + " " + styles.heartBeat}
        style={{fontWeight: 'bold', color: 'darkgreen',
        margin: '0px'}}
        hidden={!this.state.alreadyConfirmed}>
        Delivering in {this.state.seconds} seconds</p> : <p
        onClick={this.hideDelivery}
        className={styles.animated + " " + styles.flash}
        style={{fontWeight: 'bold', color: 'darkgreen',
        margin: '0px', animationIterationCount: 'infinite'}}
        hidden={!this.state.alreadyConfirmed || this.state.hideDel}>
        Delivering in {this.state.seconds} seconds</p>
    return (
      <React.Fragment>
        {delivery}
      </React.Fragment>
    )
  }
}

