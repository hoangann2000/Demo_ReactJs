import React, { Component } from 'react'

//Khai báo kết nối store redux
import { connect } from 'react-redux'


 class TangGiamSoLuong extends Component {


    //! State của Component: là đối tượng
    // state={
    //     number:0
    // }
  render() {
    console.log(this.props);
    return (
      <div className='container'>
         <button className='btn btn-danger' onClick={() => { 
            this.props.tangGiamSL(-1);
          }}>-</button>
         <span className='mx-5'>{this.props.number}</span>
         <button className='btn btn-success' onClick={() => { 
            this.props.tangGiamSL(1);
          }}>+</button>
      </div>
    )
  }
}

// connect(mapStateToProps)(ten component cần kết nối)
//? đem state từ redux store lưu xuống props của Component
const mapStateToProps = (rootReducers) => {
    return {
        number: rootReducers.stateNumber
    }
}
//?lấy dispatch từ props của component và truyền vào hàm mapDispatchToProps
const mapDispatchToProps = (dispatch) =>{
    //dispatch là hàm được cung cấp từ redux sau khi kết nối với store
    // truyền action vào dispatch
    return {
        //lưu tangGiamSL vào props của Component
        tangGiamSL:(sl)=>{
            const action ={
                //type là thuộc tính bắt buộc
                type:"TANG_GIAM_SL",
                soLuong:sl
            }

            //Giúp đưa giá trị state mới lên store redux
            dispatch(action);
        }
    }
}

//? connect trả về 1 loại component mới kết hợp tính năng giữa Component của react và Store của redux
// const componentRedux = connect(mapStateToProps,mapDispatchToProps)(TangGiamSoLuong);
// export default componentRedux;

//mapDispatchToProps luôn truyền vào tham số thứ 2 của hàm connect(null,mapDispatchToProps)()
export default connect(mapStateToProps,mapDispatchToProps)(TangGiamSoLuong);