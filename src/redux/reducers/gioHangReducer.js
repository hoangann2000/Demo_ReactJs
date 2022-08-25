
const gioHang = [];

export const gioHangReducer = (state=gioHang,action) => {
    console.log(action);
    switch (action.type) {
        case "THEM_GIO_HANG":{
            console.log(action.spGH);
            
                let spFind = state.find(product => product.maSP === action.spGH.maSP);
                console.log(spFind);
                if(spFind){
                    // sản phẩm đã tồn tại trong giỏ hàng
                    spFind.soLuong +=1
                }else{
                    state.push(action.spGH);
                }
               
            console.log("Giỏ Hàng",state);

            // immutable : tính bất biến của redux
            // nếu state là kiểu array, object thì sẽ không tự nhận diện được khi giá trị thay đổi do vẫn bị trùng địa chỉ ô nhớ;
            //return state
            return [...state];
        }
        case "XOA_GIO_HANG":{
            console.log("mã xóa", action.maSPXoa)
            //findIndex => vị trí (index) => state.splice(index, 1)=> copy state để redux render lại UI
            //filter => lọc các sản phẩm cần giữ lại => mảng mới chứa sp cần giữ lại
            const gioHangFilter = state.filter(product => product.maSP !== action.maSPXoa)
            // console.log("gioHangFilter", gioHangFilter);
            // console.log("state",state);
            // return [...state];
            return gioHangFilter;//return state mới
        }
        case "TANG_GIAM":{
            console.log(action.sl);

            let spFind = state.find(product => product.maSP === action.maSPSL);
            if(spFind){
                spFind.soLuong +=action.sl;
                if( spFind.soLuong < 1){
                    alert("Số lượng không hợp lệ");
                    // 0 - -1 => 0 + 1 => 1
                    // spFind.soLuong -= action.sl
                    spFind.soLuong = 1;
                }
            }
            return [...state];
        }
        default:
            return state;
    }
}