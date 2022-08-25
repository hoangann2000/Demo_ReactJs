
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
    //!Fix lỗi: chuyển state lên reducer
    nguoiDung: {
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

}

export const quanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        //! xử lý action HANDLE_CHANGE_INPUT
        case "HANDLE_CHANGE_INPUT":
            // console.log("newValue",action.newValue);
            state.nguoiDung = action.nguoiDung;


            return { ...state }
        case "THEM_NGUOI_DUNG":
            //spread operator 
            state.danhSachND = [...state.danhSachND, action.nguoiDung.value];

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
            state.nguoiDung.value = action.valueND;
            //Copy đối tượng nguoiDung đổi địa chỉ ô nhớ
            state.nguoiDung = { ...state.nguoiDung }

            // console.log(state.nguoiDung.value)
            return { ...state }
        case "CAP_NHAT_ND":
                console.log(action.nguoiDungUpdate);
                //tìm người dùng cần cập nhật trong danhSachND
                //find, findIndex
                //?find() => trả về đối tượng tìm thấy nguoiDungFind (trùng địa chỉ ô nhớ)
                //?=> nguoiDungFind = action.nguoiDungUpdate (không thể gán trực tiếp đối tượng)
                //? => nguoiDungFind.hoTen = action.nguoiDungUpdate.hoTen (phải gọi từng thuộc tính để đổi giá trị)

                let index = state.danhSachND.findIndex(nd => nd.taiKhoan === action.nguoiDungUpdate.taiKhoan);
                if(index >-1){
                    //tìm thấy
                    state.danhSachND[index] = action.nguoiDungUpdate
                }

                //copy mảng danhSachND để đổi dịa chỉ ô nhớ của danhSachND
                state.danhSachND = [...state.danhSachND]

            return { ...state }
        default:
            return { ...state }
    }
}