import React, { Component } from 'react'

export default class FooterChild extends Component {

    shouldComponentUpdate(newProps,currentState) {
        console.log("shouldComponentUpdate parent")

        // false -> không render lại UI
        return false;
    }

  render() {
    console.log("render footer");
    return (
      <div>FooterChild</div>
    )
  }
}
