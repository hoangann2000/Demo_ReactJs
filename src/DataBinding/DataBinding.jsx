import React, { Component } from 'react'

export default class DataBinding extends Component {

    //Thuộc tính 
    crush = {
        name: "Nguyễn Thị Cờ Rút",
        age: 20,
        avatar: "https://i.pravatar.cc/?u=77"
    }

    // met
    // ES6 thuần thì tạo method cho class phải dùng function bình thường để tránh đổi ngữ cảnh
    // Method của Class Component thì dùng arrow function => được react xử lý nên không bị sai ngữ
    //Thẻ mở phải nằm chung hàng với lệnh return
    renderCrush = () => {
        return <div className="card" style={{ width: '18rem' }}>
                <img src={this.crush.avatar} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">New {this.crush.name}</h5>
                    <p className="card-text">{this.crush.age}</p>

                </div>
            </div>
    }

    //method 
    render() {
        // DataBinding đưa giá trị hiển lên UI
        let fullName = "Nguyễn Văn A";
        let { name, age } = this.crush;
        //Lệnh return không cho phép 2 thẻ JSX cùng cấp
        //luôn phải có 1 thẻ bao bộc toàn bộ các thẻ còn lại
        return (
            <div className='container'>
                <p> Full name: {fullName}</p>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={this.crush.avatar} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{age}</p>

                    </div>
                </div>
                {this.renderCrush()}
            </div>
            // <div></div>
        )
    }
}


