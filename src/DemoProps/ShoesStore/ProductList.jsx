import React, { Component } from 'react'
import ProductItem from './ProductItem';

//chứa nhiều col-4
export default class ProductList extends Component {
     //trả về mảng các đối tượng col-4
    // 1 sản phẩm được hiển thị là 1 col-4
    renderShoes = () => {
       
        // trả mảng mới ra khỏi renderShoes
        return this.props.shoesArray.map((product) => {
            //product: từng đối tượng trong mảng shoesArray
            //trả về 1 mảng mới chứa các đối tương col-4
            // let { id } = product;
            return <div className="col-4" key={product.id}>
                <ProductItem renderDetail={this.props.renderDetail} product={product}/>
            </div>
        })
    }

    render() {
        console.log("props của con", this.props)
        return (
            <div className="row">
                {this.renderShoes()}
            </div>
        )
    }
}
