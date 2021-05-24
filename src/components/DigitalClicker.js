// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {

    state ={
        timesClicked: 0
    }

    handleClick = () =>{
        this.setState(oldState => {
            return {
                timesClicked: oldState.timesClicked + 1
            }
        })
    }


    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.timesClicked}
            </button>
        )
    }
}
