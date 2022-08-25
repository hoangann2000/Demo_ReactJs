import React, { Component } from 'react'
import Child from './Child'
import FooterChild from './FooterChild';

export default class LifeCycle extends Component {
    //Mounting (chạy khi load ứng dụng)

    constructor(props) {
        super(props);
        //state
        this.state = {
            number: 0,
            like: 0
        };

        console.log("constructor parent");
    }

    // static: phương thức/thuộc tính tĩnh , truy xuất trực tiếp được mà không cần thông qua thể hiện của lớp

    static getDerivedStateFromProps(newProps, currentState) {
        //chạy trước khi render UI
        console.log("getDerivedStateFromProps parent")
        return null;
    }

    shouldComponentUpdate(newProps,currentState) {
        console.log("shouldComponentUpdate parent")

        // true => render lại UI
        return true;
    }

    render() {
        console.log("render parent")
        return (
            <div>
                <p>{this.state.number}</p>
                <button className='btn btn-info' onClick={()=> {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}> + </button>

                {
                 (this.state.like > 2) ? "" : 
                 <Child like={this.state.like}/>
                }    

                <button className='btn btn-info' onClick={()=>{
                    this.setState({
                        like: this.state.like + 1
                    })
                }}>+</button>

                <FooterChild/>
            </div>
        )
    }

    componentDidMount(){
        //chạy sau khi load hoàn chỉnh UI
        //thư viện carousel, slider, count up => khi UI đã load xong thì thư viện mới tìm được thẻ để gắn hiệu ứng
        console.log("componentDidMount parent")
    }

    componentDidUpdate() {
        // chạy sau khi render UI xong
        // hạn chế state => state thay đổi render lại => chạy componentDidUpdate 
        console.log("componentDidUpdate parent");
    }

}

