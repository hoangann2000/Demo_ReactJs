import React, { Component } from 'react'

export default class TangGiamFont extends Component {
    // size = 60;

    state = {
        size: 60
    }

  render() {
    return (
      <div className='container'>
            <h1 style={{fontSize : `${this.state.size}px`}}>Demo tăng giảm font size</h1>
            <button onClick={() => { 
                // let newState = {
                //     size: this.state.size + 2
                // }
                // this.setState(newState)
                this.setState({size: this.state.size + 2})

             }} className='btn btn-success'>+</button>
            <button onClick={() => { 
                this.setState({size: this.state.size - 2})
            }} className='btn btn-danger'>-</button>
      </div>
    )
  }
}
