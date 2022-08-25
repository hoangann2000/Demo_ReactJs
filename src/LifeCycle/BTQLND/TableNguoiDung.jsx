import React, { Component } from 'react'

import { connect } from 'react-redux'

class TableNguoiDung extends Component {


   
  renderDSND = () => {
      let stt = 1;
      return this.props.danhSachND.map((nd) => { 
          let {taiKhoan,hoTen,matKhau,sdt,email, loaiNguoiDung} = nd;
          return <tr key={taiKhoan}>
                <td>{stt++}</td>
                <td>{taiKhoan}</td>
                <td>{hoTen}</td>
                <td>{matKhau}</td>
                <td>{sdt}</td>
                <td>{email}</td>
                <td>{loaiNguoiDung}</td>
                <td>
                    <button className='btn btn-danger' 
                    onClick={() => { 
                        // console.log(taiKhoan);

                          let action = {
                            type:"XOA_NGUOI_DUNG",
                            taiKhoanXoa: taiKhoan
                          }

                          this.props.dispatch(action)
                     }}
                     >Xóa</button>
                    <button className='btn btn-info' onClick={() => { 
                        let action ={
                          type:"XEM_NGUOI_DUNG",
                          nguoiDungXem: nd
                        }
                        this.props.dispatch(action)
                        
                     }} >Sửa</button>
                </td>
          </tr>
       })
  }

  render() {
    console.log(this.props)
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tài khoản</th>
            <th scope="col">Họ Tên</th>
            <th scope="col">Mật Khẩu</th>
            <th scope="col">SĐT</th>
            <th scope="col">Email</th>
            <th scope="col">Mã loại</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {this.renderDSND()}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (rootReducer) =>{
    return {
        danhSachND: rootReducer.quanLyNguoiDungReducer.danhSachND
    }
}

export default connect(mapStateToProps)(TableNguoiDung);