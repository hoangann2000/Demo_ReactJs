import logo from './logo.svg';
import './App.css';
import NavbarRCC from './Components/NavbarRCC';
import CardRFC from './Components/CardRFC';
import HomeComponent from './BTComponent/HomeComponent';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import StyledComponent from './StyledComponent/StyledComponent';
import DemoState from './DemoState/DemoState';
import TangGiamFont from './DemoState/TangGiamFont';
import ChangeCar from './DemoState/ChangeCar';
import RenderArray from './RenderArray/RenderArray';
import DemoProps from './DemoProps/DemoProps';
import ShoesStore from './DemoProps/ShoesStore/ShoesStore';
import BTGioHang from './DemoProps/BTGioHang/BTGioHang';
import TangGiamSoLuong from './DemoRedux/TangGiamSoLuong';
import BTGioHangRedux from './DemoRedux/BTGioHangRedux/BTGioHangRedux';
import BTQuanLyNguoiDung from './DemoRedux/BTQLND/BTQuanLyNguoiDung';
import LifeCycle from './LifeCycle/LifeCycle';
import BTQLND from './LifeCycle/BTQLND/BTQuanLyNguoiDung';

//App là component chính sẽ chứa tất cả các component chức năng của dự án
function App() {
  return (
    <div className="App">
    <BTQLND/>
    </div>
  );
}

export default App;
