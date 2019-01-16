import React, { Component } from 'react'

export default class Countdown extends Component {

    state = {
        seconds: 0,
        id: ''
    }

    tick = () => {
        if(this.state.seconds > 0){
            const sec = this.state.seconds - 1
            this.setState({seconds: sec})
        }
        else
        {
            clearInterval(this.state.id)
        }
        // if (min === 0 & sec === 0) {
        // clearInterval(this.intervalHandle);
        // }
    }

    startCountDown = () => {
        let id
        if(this.props.seconds > 0){
            console.log("test")
            id = setInterval(this.tick, 1000)
            this.setState({seconds: this.props.seconds, id: id})
        }
    }

  render() {
    //   let pCounter = null
    //   if(this.state.seconds > 0){
    //       pCounter = <p>Delivering in {this.state.seconds} seconds</p>
    //   }
    return (
      <React.Fragment>
        <button className="btn btn-primary" onClick={this.startCountDown}>
            Confirm</button>
            <p>Delivering in {this.state.seconds} seconds</p>
      </React.Fragment>
    )
  }
}

