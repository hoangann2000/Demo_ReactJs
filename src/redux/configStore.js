//File khai báo cài đặt redux
//Store (chứa các state thay đổi giá trị)
// state lưu trữ ở store redux còn được gọi là reducers

import { combineReducers,createStore } from "redux";

import { gioHangReducer } from "./reducers/gioHangReducer";

import { quanLyNguoiDungReducer } from "./reducers/quanLyNguoiDungReducer";


const rootReducers = combineReducers({
    //Các state của ứng dụng
    //?Default param (ES6): gán giá trị mặc định cho tham số
    //? state sẽ được lưu trong hàm của redux
    stateNumber:(state=0,action)=>{

        //trả về giá trị mới của state
        //khi redux nhận thấy giá trị state thay đổi => tự render lại UI của component (có kết nối với store)
        console.log(action)
        switch (action.type) {
            case "TANG_GIAM_SL":{
                state = state + action.soLuong
                return state;
            }
            default: 
            return state;
               
        }
        
    },

    // stateGH:()=>{}
    // stateLogin:()=>{}
    // object literal
    // gioHangReducer: gioHangReducer
    gioHangReducer,
    quanLyNguoiDungReducer,

    //  QLNDReducer,
    //  QLDH,
    //  QLSP,



});

export const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());