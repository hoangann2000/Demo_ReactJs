import React, { Component } from 'react'

import { connect } from 'react-redux';
class FormDangKy extends Component {
  // onchange của js => gõ trên input và phải click ra bên ngoài input thì mới kích hoạt sự kiện
  // onChange của reactjs => chỉ cần gõ trên ô input là kích hoạt sự kiện 

  //chứa giá trị từ form
  //!Fix lỗi: chuyển state lên reducer
  // state = {

  //   //chứa các giá trị từ form
  //   value: {
  //     taiKhoan: "",
  //     hoTen: "",
  //     matKhau: "",
  //     sdt: "",
  //     email: "",
  //     loaiNguoiDung: "khachHang"
  //   },
  //   //chứa các thông báo lỗi cho từng thuộc tính
  //   errors: {
  //     taiKhoan: "",
  //     hoTen: "",
  //     matKhau: "",
  //     sdt: "",
  //     email: ""
  //   }
  // }


  handleInput = (event) => {
    //event, evt, e

    // event: sự kiện có sẵn của html
    // console.log(event.target);
    // event.target.name, event.target.id, event.target.value
    let { value, name } = event.target;
    console.log(value, name);

    // object literal
    //! đổi this.state => this.props.nguoiDung
    let newValue = { ...this.props.nguoiDung.value }
    //newValue["taiKhoan"] = "user1"
    newValue[name] = value;

    let newError = { ...this.props.nguoiDung.errors };
    let message = "";

    //Kiểm tra rỗng
    if (value.trim() === "") {
      //ô đang bị để trống
      message = name + " không được để trống";
    }


    // data-type: thuộc tính tự đặt dev => không phải chuẩn thuộc tính của html
    // => không gọi trực tiếp từ event.target
    let dataType = event.target.getAttribute("data-type");
    console.log(dataType);
    if (dataType === "email") {
      let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      // value.match(pattern) != true
      if (!value.match(pattern)) {
        //email không đúng định dạng
        message = name + " không đúng định dạng";
      }
    }

    newError[name] = message;

    // this.setState({
    //   value: newValue,
    //   errors: newError
    // }, () => {
    //   console.log("state", this.state);
    // })

    //! đẩy dữ liệu của newValue và newError lên reducer
    let action={
      type:"HANDLE_CHANGE_INPUT",
      nguoiDung:{
        value: newValue,
        errors: newError
      }
      
    }
    this.props.dispatch(action);

  }


  handleSubmit = (event) => {
    //chặn sự kiện load trang khi submit
    event.preventDefault();

    //! đổi state thành this.props.nguoiDung
    let { value, errors } = this.props.nguoiDung;
    //for in dùng duyệt dược đối tượng
    for (const key in errors) {
      if (errors[key] !== "") {
        //đang bị lỗi
        alert(key + "chưa hợp lệ");
        return; //dừng hàm không thực hiện tiếp khi lỗi
      }
    }
    //Nếu người dùng không gõ trên ô input thì phải kiểm tra lại value ở submit\
    // forin
    for (const key in value) {
      if (value[key] === "") {
        //đang bị lỗi
        alert(key + "đang bị trống");
        return; //dừng hàm không thực hiện tiếp khi lỗi
      }
    }

    let action = {
      type: "THEM_NGUOI_DUNG",
      nguoiDung: this.props.nguoiDung
    }

    this.props.dispatch(action);

  }

  handleUpdate = (event)=>{
    event.preventDefault();

    let action ={
      type: "CAP_NHAT_ND",
      nguoiDungUpdate: this.props.nguoiDung.value
    }

    this.props.dispatch(action);
  }



  render() {
    // let { taiKhoan, hoTen, matKhau, sdt, email } = this.state.errors;

    //!Fix lỗi: đổi các nội dung của state thành reducer (lấy từ props)
    let { value, errors } = this.props.nguoiDung;
    let { taiKhoan, hoTen, matKhau, sdt, email } = errors;

    console.log(this.props)
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="taiKhoan">Tài Khoản</label>
              {/* <input onChange={(event) => {
                    this.handleInput(event);
              }} type="text" className="form-control" id="taiKhoan" name="taiKhoan" /> */}
              <input onChange={this.handleInput} type="text" className="form-control" id="taiKhoan" name="taiKhoan" value={value.taiKhoan} />
              <p className='text-danger'>{taiKhoan}</p>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="taiKhoan">Họ Tên</label>
              <input onChange={this.handleInput} type="text" className="form-control" id="hoTen" name="hoTen" value={value.hoTen}/>
              <p className='text-danger'>{hoTen}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="matKhau">Mật Khẩu</label>
              <input onChange={this.handleInput} type="password" className="form-control" id="matKhau" name="matKhau" value={value.matKhau}/>
              <p className='text-danger'>{matKhau}</p>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="sdt">Số điện thoại</label>
              <input onChange={this.handleInput} type="text" className="form-control" id="sdt" name="sdt"  value={value.sdt}/>
              <p className='text-danger'>{sdt}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input data-type="email" onChange={this.handleInput} type="email" className="form-control" id="email" name="email" value={value.email} />
              <p className='text-danger'>{email}</p>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="loaiNguoiDung">Mã loại người dùng</label>
              <select onChange={this.handleInput} className="form-control" id="loaiNguoiDung" name="loaiNguoiDung" value={value.loaiNguoiDung}>
                <option value={"khachHang"} >Khách Hàng</option>
                <option value={"quanLy"}>Quản Lý</option>
              </select>

              <p className='text-danger'></p>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Đăng Ký</button>
        <button type="submit" className="btn btn-primary" onClick={this.handleUpdate}>Cập Nhật</button>
      </form>
    )
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    // nguoiDungChiTiet: rootReducer.quanLyNguoiDungReducer.nguoiDungChiTiet
    //!Fix lỗi: kéo đối tương nguoiDung từ reducer
    nguoiDung: rootReducer.quanLyNguoiDungReducer.nguoiDung
  }
}

export default connect(mapStateToProps)(FormDangKy);