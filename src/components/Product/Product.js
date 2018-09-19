import React from 'react'
import './Product.css'


class Product extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="product card">
                <div className="card-title">
                    <h2>Product</h2>
                </div>
                <div className="card-body">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.price}</p>
                </div>
            </div>
        )
    }

}

export default Product
