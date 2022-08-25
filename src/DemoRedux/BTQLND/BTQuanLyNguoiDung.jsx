import React, { Component } from 'react'
import FormDangKy from './FormDangKy'
import TableNguoiDung from './TableNguoiDung'

export default class BTQLND extends Component {
    render() {
        return (
            <div className='container'>
                <div className="card">
                    <div className="card-header bg-warning">
                        Form Đăng Ký
                    </div>
                    <div className="card-body">
                        <FormDangKy />
                    </div>
                </div>

                <div className="card">
                    <div className="card-header bg-warning">
                        Danh sách người dùng
                    </div>
                    <div className="card-body">
                       <TableNguoiDung/>
                    </div>
                </div>
            </div>
        )
    }
}
