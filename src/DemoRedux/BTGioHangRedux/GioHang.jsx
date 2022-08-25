import React, { Component } from 'react'

import { connect } from 'react-redux';

class GioHang extends Component {

  renderGioHang = () => {
    return this.props.gioHang.map((product) => {
        let { maSP, tenSP, hinhAnh, giaBan, soLuong } = product;
        return <tr key={maSP}>
            <td>{maSP}</td>
            <td>
                <img style={{ width: "50px" }} src={hinhAnh} alt="" />
            </td>
            <td>{tenSP}</td>
            <td>
                <button onClick={() => { 
                     const action ={
                      type:"TANG_GIAM",
                      sl:-1,
                      maSPSL:maSP
                    }
                    this.props.dispatch(action)
                    
                 }} className='btn btn-danger'>-</button>
                <span>{soLuong}</span>
                <button onClick={() => { 
                   const action ={
                     type:"TANG_GIAM",
                     sl:1,
                     maSPSL:maSP
                   }
                   this.props.dispatch(action)
                }} className='btn btn-success'>+</button>
            </td>
            <td>{giaBan.toLocaleString()}</td>
            <td>{(giaBan * soLuong).toLocaleString()}</td>
            <td>
                <button onClick={() => { 
                    console.log(maSP);
                    const action ={
                      type:"XOA_GIO_HANG",
                      maSPXoa:maSP
                    }
                    this.props.dispatch(action);
                 }} className='btn btn-danger'>Xóa</button>
            </td>
        </tr>
    })
}
  render() {
    console.log(this.props)
    return (
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Giỏ hàng</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Mã</th>
                    <th scope="col">Hình Ảnh</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Số Lượng</th>
                    <th scope="col">Đơn Giá</th>
                    <th scope="col">Thành Tiền</th>
                  </tr>
                </thead>
                <tbody>
                    {this.renderGioHang()}
                </tbody>
              </table>

            </div>

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (rootReducers) => {
  return {
      gioHang: rootReducers.gioHangReducer
  }
}

export default connect(mapStateToProps)(GioHang);
