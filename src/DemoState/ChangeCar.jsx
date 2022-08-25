import React, { Component } from 'react'

export default class ChangeCar extends Component {

    //   imgCar ="./img/products/black-car.jpg";

    state = {
        imgCar: "./img/products/black-car.jpg"
    }

    changeCar = (color) => {
        let newState = {
            imgCar: `./img/products/${color}-car.jpg`
        }
        this.setState(newState);
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-8">
                        <img className='img-fluid' src={this.state.imgCar} alt="" />
                    </div>
                    <div className="col-4">
                        <ul className="nav flex-column" >
                            <li className="nav-item py-3">
                                <button onClick={() => {
                                    // let color = "black";
                                    this.changeCar("black");
                                }} className='btn btn-dark'>Black</button>
                            </li>
                            <li className="nav-item py-3">
                                {/* anfn */}
                                <button onClick={() => {
                                   this.changeCar("steel");
                                }} className='btn btn-secondary'>Steel</button>
                            </li>
                            <li className="nav-item py-3">
                                <button onClick={() => {
                                   this.changeCar("silver");
                                }}  className='btn btn-light'>Sliver</button>
                            </li>
                            <li className="nav-item py-3">
                                <button onClick={() => {
                                   this.changeCar("red");
                                }}  className='btn btn-danger'>Red</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
