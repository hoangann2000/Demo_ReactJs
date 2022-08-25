import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductList extends Component {


    renderPhoneList = () => {
        return this.props.phoneArray.map((product) => {
            let { maSP } = product;
            return <div className="col-4" key={maSP}>
                <ProductItem themGioHang={this.props.themGioHang}  product={product} />

            </div>
        })
    }


    render() {
        console.log(this.props)
        return (
            <div className="row py-5">
                {this.renderPhoneList()}
            </div>
        )
    }
}
