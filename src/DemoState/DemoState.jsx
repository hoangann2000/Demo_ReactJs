import React, { Component } from 'react'

export default class DemoState extends Component {

    //trạng thái đăng nhập => true => Hello username
    // false => button Login
    // isLogin = false;
    username = "Nguyễn Thị User"

    //State (kiểu đối tượng) là thuộc tính có sẵn của Reactjs được định nghĩa trong class Component
    // Chứa các giá trị cần thay đổi khi người dùng tác động lên UI
    //Giúp render lại UI khi có sự thay đổi giá trị của thuộc tính trong state
    state = {
        isLogin: false
    }

    renderLogin = () => {
        //kiểm tra điều kiện
        // console.log(this.state.isLogin);
        if (this.state.isLogin) {
            return <p className='text-white'>Hello {this.username}</p>
        } else {
            //người dùng tác động lên UI
            //Khi click button Login => isLogin => true
            return <button onClick={() => {
                // this.state.isLogin = true;
                //console.log(this.state.isLogin);// có đổi sang true

                //? setState có 2 tham số: 
                //tham số 1: truyền state mới
                //tham số 2: 
                //kiểu đối tượng
                // thuộc tính của state mới phải trùng tên thuộc của state ban đầu
                //setState có cơ chế gội render lại UI
                let newState = {
                    isLogin: true
                }

                this.setState(newState, () => {
                    //các lệnh cần chạy sau khi đã set được state
                    console.log(this.state.isLogin);
                });
                //tai sạo vẫn thông báo là false?
                // console.log(this.state.isLogin);

                //Khi gọi trực tiếp render để chạy lại thì không được
                // this.render();// chưa render lại giao diện
            }} className="btn btn-success" type="button">Login</button>
        }
    }
    render() {
        return (
            <div className='container-fluid'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">

                            {this.renderLogin()}

                        </form>
                    </div>
                </nav>

            </div>
        )
    }
}
