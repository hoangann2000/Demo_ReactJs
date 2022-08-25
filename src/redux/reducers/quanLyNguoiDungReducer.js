
//state => là kiểu dữ liệu gì
// Nên là kiểu đối tượng => để lưu trữ được đa dạng các kiểu dữ liệu khác nhau
const stateDefault = {
    danhSachND: [
        {
            taiKhoan: "user1", hoTen: "Nguyễn Văn A", matKhau: "123456", sdt: "094324542", email: "test@gmail.com", loaiNguoiDung: "khachHang"
        }
    ],
    nguoiDungChiTiet: {
        taiKhoan: "",
        hoTen: "",
        matKhau: "",
        sdt: "",
        email: "",
        loaiNguoiDung: ""
    },
}

export const quanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        //! xử lý action HANDLE_CHANGE_INPUT
    
        case "THEM_NGUOI_DUNG":
            //spread operator 
            state.danhSachND = [...state.danhSachND, action.value];

            return { ...state }

        case "XOA_NGUOI_DUNG":
            // console.log("taikhoanXoa",action.taiKhoanXoa);

            //tim đối tượng trong mảng => xóa (splice), filter
            // let danhSachNDXoa = state.danhSachND.filter((nd) => { 
            //     return nd.taiKhoan !== action.taiKhoanXoa;
            //  })
            //  state.danhSachND = danhSachNDXoa;
            //  state.danhSachND = [...state.danhSachND]

            //copy mảng người dùng và filter giữ lại các nd không cần xóa
            state.danhSachND = [...state.danhSachND.filter(nd => nd.taiKhoan !== action.taiKhoanXoa)]

            return { ...state }

        case "XEM_NGUOI_DUNG":
            console.log(action.nguoiDungXem);
           state.nguoiDungChiTiet = action.nguoiDungXem;

            return { ...state }
        case "CAP_NHAT_ND":
            

            return { ...state }
        default:
            return { ...state }
    }
}

