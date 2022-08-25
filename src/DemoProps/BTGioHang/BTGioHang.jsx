import React, { Component } from 'react'
import GioHang from './GioHang';
import ProductList from './ProductList';

export default class BTGioHang extends Component {

    phoneArray = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/phone/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/phone/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/phone/applephone.jpg" }
    ];


    //khai báo state
    //gioHang: kiểu dữ mảng các đối tượng sản phẩm cần thêm vào giỏ hàng
    state = {
        gioHang: []
    }


    //Khai báo phương thức
    themGioHang = (productClicked) => {
        console.log(productClicked);
        //?function scope (dùng trong hàm) 
        let gioHangUpdate = [...this.state.gioHang];

        /**
         * Nếu sp đã tồn tại => tăng số lượng
         * Ngược lại => thêm 1 hàng sp mới
         */

        //for, map, some=> true/false, find => giá trị tìm thấy, findIndex => index(vị trí tìm thấy)
        // let productFind = this.state.gioHang.find((product) => { 
        //     return product.maSP === productClicked.maSP;
        //  });
        let productFind = this.state.gioHang.find(product => product.maSP === productClicked.maSP);

        if (productFind) {
            //đã có sản phẩm trong giỏ hàng
            // productFind.soLuong = productFind.soLuong  + 1;
            productFind.soLuong += 1;
        } else {
            //?Spead Operator
            //copy các thuộc tính của đối tương productClicked lưu vào productGH
            //{...productClicked}
            //{...productClicked, soLuong: 1} : 
            //nếu thuộc tính chưa có thì thêm thuộc tính mới
            // nếu đã tồn tại thuộc tính đó thì ghi đè giá trị
            let productGH = { ...productClicked, soLuong: 1 };
            console.log(productGH);
            // this.state.gioHang.push(productGH)
            //? block scope chỉ dùng được trong lệnh if..else, for phạm vi dấu {} gần nhất
            // let gioHangUpdate = [...this.state.gioHang, productGH];
            
            gioHangUpdate.push(productGH)
        }

        this.setState({
            gioHang: gioHangUpdate
        })


       

       
    }

    xoaGioHang = (maSPXoa) =>{
        console.log(maSPXoa);

        let gioHangUpdate = [...this.state.gioHang]
        //Tìm vị trí của sản phầm cần xóa khỏi giỏ hàng

        // let indexSPXoa = gioHangUpdate.findIndex((product) => { 
        //     return product.maSP === maSPXoa;
        //  });
        //  let indexSPXoa = gioHangUpdate.findIndex(product =>  product.maSP === maSPXoa);
        // console.log(indexSPXoa);

        //  if(indexSPXoa > -1){
        //     //tìm thấy vị trí
        //     gioHangUpdate.splice(indexSPXoa,1);

        //  }

        //Lọc ra các sản phẩm có mã SP khác với sản phẩm cần xóa (maSPXoa)
        //mảng mới sẽ không chứa sp có maSPXoa
         gioHangUpdate = gioHangUpdate.filter((product)=>{
            return product.maSP !==maSPXoa;
        })


         this.setState({
            gioHang:gioHangUpdate
         })


    }

    tangGiamSL = (maSP, sl) => {
        //sl truyền 1 nếu button tăng
        //sl truyền -1 nếu button giảm
        console.log(maSP, sl);

        let gioHangUpdate = [...this.state.gioHang];

        let productFind = gioHangUpdate.find(product => product.maSP === maSP);
        if(productFind){
            // soLuong: 2 + -1 => 2- 1 =1
            productFind.soLuong += sl;
            if(productFind.soLuong < 1){
                alert("Số lượng không đúng");
                // 0 - -1 => 0 +  1 => 1
                //khi sản phẩm về 0 mà còn tiếp tục giảm
                //=> xử lý code để không giảm nữa 
                productFind.soLuong -= sl;
            }
        }

        this.setState({
            gioHang:gioHangUpdate
        })
    }

    /**
     * sum =0
     * Duyệt mảng giỏ hàng => lấy từng sản phẩm => sp
     *      lấy thuộc tính soLuong của từng sản phẩm => sp.soLuong
     *      cộng tổng của thuộc tính soLuong => sum += sp.soLuong
     */
    tinhTongSL = () => {
        // reduce: duyệt mảng, lấy từng phần tử, dựa vào công thức tính của dev => return về kết quả tính cuối cùng
        /**
         * reduce((kết quả, item, index) => {
                return công thức tính toán
            }, giá trị mặc định của kết quả)
         */
        let {gioHang} = this.state;
        let total =  gioHang.reduce((sum, sp, index) => {
            return sum += sp.soLuong;
        }, 0);

        return total;
    }


    render() {
        return (
            <div className='container'>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled">Disabled</a>
                                </li>
                            </ul>
                            <p className='text-white'>Giỏ hàng ({this.tinhTongSL()})</p>
                        </div>
                    </nav>

                </header>
                <ProductList themGioHang={this.themGioHang} phoneArray={this.phoneArray} />

                <GioHang tangGiamSL={this.tangGiamSL} xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang} />



            </div>
        )
    }
}
