// rcc
import React, { Component } from 'react'
import NavBarProps from './NavBarProps'

export default class DemoProps extends Component {
   styleColor = "red"
   stylebgColor = "yellow"

    render() {
    return (
      <header className='container'>
         {/* Khai báo props
          + props chứa các thuộc tính của thẻ component do dev định nghĩa
          + props được tạo sẵn trong class Component của reactjs
          + Truyền giá trị từ component cha sang component con
          */}
            <NavBarProps styleColor={this.styleColor} stylebgColor={this.stylebgColor} styleFS={"50px"}/>
      </header>
    )
  }
}
