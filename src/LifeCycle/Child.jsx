import React, { Component } from 'react';

class Child extends Component {

    constructor(props){
        super(props);
        this.state = {
        };
        console.log("constructor child");
        this.time = 0
    }

    static getDerivedStateFromProps(newProps, currentState) {
        //chạy trước khi render UI
        console.log("getDerivedStateFromProps child")
        return null;
    }

    shouldComponentUpdate(newProps,currentState) {
        console.log("shouldComponentUpdate parent")

        //Vì componet Child chỉ sử dụng giá trị like nên chỉ render lại UI khi thay đổi, ngược lại sẽ không render lại
        console.log(newProps)
        console.log(this.props);
        // true => render lại UI
        if(newProps.like !== this.props.like) {
            return true
        }else
        return false;
    }
 
    render() {
        console.log("render child")
        let {like,number} = this.props
        return (
            <div>
                <p>like {like}</p>
            </div>
        );
    }

    componentDidMount(){
        //chạy sau khi load hoàn chỉnh UI
        //thư viện carousel, slider, count up => khi UI đã load xong thì thư viện mới tìm được thẻ để gắn hiệu ứng
        console.log("componentDidMount child")
        // đoạn code trong interval sẽ được chạy nhiều lần theo thời gian quy định
        // setTimeOut; chờ bao nhiêu giây mới chạy code trong set timeOut
         
       this.time =  setInterval(() => {
        console.log("check new feed child")
       }, 1000)
    }

    componentDidUpdate() {
        // chạy sau khi render UI xong
        console.log("componentDidUpdate child");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount child");
        clearInterval(this.time)
    }

}

export default Child;