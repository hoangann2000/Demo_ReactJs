import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

  renderProduct = () => {
    return this.props.phoneArray.map((product) => {
      return <div className="col-4" key={product.maSP}>
            <ProductItem  product={product}/>

      </div>
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className='row'>
          {this.renderProduct()}
      </div>
    )
  }
}
