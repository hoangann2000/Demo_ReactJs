import React, { Component } from 'react';

class ProductItem extends Component {

    render() {
        console.log("props của producItem", this.props);
        let {name, image, price} = this.props.product;
        return (
            <div className="card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{price}</p>

                        <button onClick={() => {
                            //khi click button xem chi tiết => truyền đối tượng product cần xem vào cho hàm setState
                            // console.log(this.props.product);
                            // let newState = {
                            //     productDetail: product
                            // }
                            // this.setState(newState);
                            // this.setState({
                            //     productDetail: product
                            // });

                                this.props.renderDetail(this.props.product);

                        }} data-toggle="modal" data-target="#exampleModal" type='button' className='btn btn-success'>Xem chi Tiết</button>
                    </div>
                </div>
        );
    }
}

export default ProductItem;