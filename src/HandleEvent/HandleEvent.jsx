import React, { Component } from 'react'

export default class HandleEvent extends Component {
    //thuộc tính
    crush = {
        name: "Nguyễn Thị Cờ Rút",
        age: 20,
        avatar: "https://i.pravatar.cc/?u=77"
    }

    //không có tham số
    showInfo = () => {
        //truyền biến vào trong chuỗi string
        alert(`Tên cờ rút: ${this.crush.name}`);
    }

    //Có tham số
    showInfoParam = (name) => {
        alert(`Tên cờ rút: ${name}`);
    }
  render() {
    return (
      <div className='container'>
        <h1>HandleEvent</h1> 
        {/* {}: dấu data binding reactjs */}
        <button onClick={this.showInfo} className='btn btn-success'>Show Info</button>
        <button onClick={() => { 
            this.showInfoParam(this.crush.name);
         }} className='btn btn-success'>Show Info Param</button>
    </div>
    )
  }
}
// onClick={this.showInfo}
// document.getElementById().onclick = tenFunction;

// onClick={() => { 
//     this.showInfoParam(this.crush.name);
//  }} 
// document.getElementById().onclick = function(){
//     tenFunction(name)
// };