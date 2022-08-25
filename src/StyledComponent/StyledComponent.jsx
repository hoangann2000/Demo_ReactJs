import React, { Component } from 'react'

//Cach 1: dùng phổ biến, dễ sử dụng, giúp phân chia rõ ràng code css
//import file css sẽ được dùng chung cho toàn bộ ứng dụng
import "./StyledComponent.css";

//Cách 3: style module
//styleModule => object
import styleModule from "./style.module.css";


export default class StyledComponent extends Component {

    //Cách 2: style inline 
    //cần chỉnh sửa động giá trị css, tăng ưu tiên
    // Khi có quá nhiều thuộc tính css cần thêm
    styleObj = {
        backgroundColor: "red",
        fontSize:"60px"
    }
    renderHeading= () =>{
        let isRed= false;
        
        if(isRed){
            return <h2 className={`p-5 ${styleModule["text-red"]}`}>demo styled module</h2>
        }else{
            return <h2 className={`p-5 ${styleModule["text-blue"]}`}>demo styled module</h2>
        }
    }
    render() {
        
        return (
            <div className='container' >
                {/* thuộc tinh style sẽ binding kiểu object */}
                {/* Khi có ít thuộc tính */}
                
                <h1 className='heading1' style={{backgroundColor: "red", fontSize:"60px"}}>StyledComponent</h1>
                <h1 className='heading1 p-5' style={this.styleObj}>StyledComponent</h1>

                {/* cách 3: style module
                Chỉ component nào import mơi dùng được css trong file module
                 */}

                 
                <h2 className={styleModule.styleFS}>demo styled module</h2>
                <h2 className={styleModule["text-red"]}>demo styled module</h2>
                <h2 className={`p-5 ${styleModule["text-red"]}`}>demo styled module</h2>

                 {this.renderHeading()}
            </div>
        )
    }
}


// document.getElementById().style.backgroundColor
//?Gọi thuộc tính của object
// object.tenthuoctinh
// object["tenThuoctinh"]