import React, { Component } from 'react'

import { connect } from 'react-redux';
class FormDangKy extends Component {
  // onchange của js => gõ trên input và phải click ra bên ngoài input thì mới kích hoạt sự kiện
  // onChange của reactjs => chỉ cần gõ trên ô input là kích hoạt sự kiện 

  //chứa giá trị từ form
  state = {

    //chứa các giá trị từ form
    value: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      sdt: "",
      email: "",
      loaiNguoiDung: "khachHang"
    },
    //chứa các thông báo lỗi cho từng thuộc tính
    errors: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      sdt: "",
      email: ""
    }
  }


  handleInput = (event) => {
    //event, evt, e

    // event: sự kiện có sẵn của html
    // console.log(event.target);
    // event.target.name, event.target.id, event.target.value
    let { value, name } = event.target;
    console.log(value, name);

    // object literal
    let newValue = { ...this.state.value }
    //newValue["taiKhoan"] = "user1"
    newValue[name] = value;

    let newError = { ...this.state.errors };
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

    this.setState({
      value: newValue,
      errors: newError
    }, () => {
      console.log("state", this.state);
    })


  }


  handleSubmit = (event) => {
    //chặn sự kiện load trang khi submit
    event.preventDefault();

    let { value, errors } = this.state;
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
      type:"THEM_NGUOI_DUNG",
      nguoiDung: value
    }

    this.props.dispatch(action);

  }

//   static getDerivedStateFromProps(newProps, currentState) {
//     //chạy trước khi render UI
//     // quy định giá trị của state
//     //  curerntState -> giá trị hiện tại của State trước khi đổi ,
//     // đem NguoiDungChiTiet từ Props lưu vào giá trị value của State
//     if(newProps.nguoiDungChiTiet.taiKhoan !== currentState.value.taiKhoan) {
//       // Khi giá trị của tài khoản thay đổi thì đang cần xem thông tin chi tiết của các người dùng 
//       return {
        
//         // Khi nào lấy giá trị nguoiDungChiTiet lưu vào value
//         // Khi nào lấy giá trị mới từ handleInput lưu vào state Value
//         ...currentState, value: newProps.nguoiDungChiTiet
//       };
//     }
//     return currentState;
//     // Ngược lại nếu tài khoản không đổi thì đang làm chức năng sửa
// } 

// khi props thay đổi thì đem giá trị lưu vào value
  componentWillReceiveProps(newProps) {
    this.setState({
      value: newProps.nguoiDungChiTiet
    })
  }

  render() {
    let { taiKhoan, hoTen, matKhau, sdt, email } = this.state.errors;
    let {value} = this.state;

    let {nguoiDungChiTiet } = this.props;

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
              <input onChange={this.handleInput} type="text" className="form-control" id="taiKhoan" name="taiKhoan"  value={value.taiKhoan}  />
              <p className='text-danger'>{taiKhoan}</p>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="taiKhoan">Họ Tên</label>
              <input onChange={this.handleInput} type="text" className="form-control" id="hoTen" name="hoTen"  value={value.hoTen}  />
              <p className='text-danger'>{hoTen}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="matKhau">Mật Khẩu</label>
              <input onChange={this.handleInput} type="password" className="form-control" id="matKhau" name="matKhau" />
              <p className='text-danger'>{matKhau}</p>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="sdt">Số điện thoại</label>
              <input onChange={this.handleInput} type="text" className="form-control" id="sdt" name="sdt" />
              <p className='text-danger'>{sdt}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input data-type="email" onChange={this.handleInput} type="email" className="form-control" id="email" name="email" />
              <p className='text-danger'>{email}</p>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="loaiNguoiDung">Mã loại người dùng</label>
              <select onChange={this.handleInput} className="form-control" id="loaiNguoiDung" name="loaiNguoiDung">
                <option value={"khachHang"} >Khách Hàng</option>
                <option value={"quanLy"}>Quản Lý</option>
              </select>

              <p className='text-danger'></p>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Đăng Ký</button>
        <button type="submit" className="btn btn-primary">Cập Nhật</button>
      </form>
    )
  }
}

const mapStateToProps = (rootReducer) =>{
    return {
      nguoiDungChiTiet: rootReducer.quanLyNguoiDungReducer.nguoiDungChiTiet
    }
}

export default  connect(mapStateToProps)(FormDangKy);