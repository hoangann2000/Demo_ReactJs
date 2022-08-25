import React, { Component } from 'react'

import { connect } from 'react-redux';

 class ProductItem extends Component {
  render() {
    console.log(this.props)
    let {maSP, hinhAnh,tenSP,giaBan} = this.props.product;
    return (
      <div className="card">
        <img src={hinhAnh} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{tenSP}</h5>
          <p className="card-text">{giaBan.toLocaleString()}</p>
          <button onClick={() => {
              // this.props.themGioHang(this.props.product);

              // C2: sử dụng trực tiếp this.props.dispatch()
              let spGH = {...this.props.product, soLuong:1};
              const action = {
                 type:"THEM_GIO_HANG",
                 spGH:spGH
              }  
   
              this.props.dispatch(action);

              
          }} className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Thêm giỏ hàng</button>
        </div>
      </div>
    )
  }
}


//C1: sử dụng mapDispatchToProps
// const mapDispatchToProps = (dispatch) => {
//     return {
//         themGioHang:(product)=>{
//            //dispatch(action)
//            // spread operator
//             let spGH = {...product, soLuong:1};
//            const action = {
//               type:"THEM_GIO_HANG",
//               spGH:spGH
//            }  

//            dispatch(action);
//         }
//     }
// }


// connect()() => trả về 1 component chứa redux + Component
//connect(mapStateToProps, mapDispatchToProps)(tên component)
// export default connect(null,mapDispatchToProps)(ProductItem);

// C2: dùng trực tiếp dispatch()
export default connect()(ProductItem);