import React from 'react'
import './Product.css'
import ProductImage from '../ProductImage/ProductImage'

const button_style = {
    margin: "5px"
};

class Product extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="product card">
                <ProductImage image_uuid={this.props.image_uuid} />
                <div className="card-body">
                    <div className="card-title">
                        <h5>{this.props.name}</h5>
                    </div>
                    <p>Немного расскажем об этих куклах. Они живут своей маленькой уютной жизнью</p>
                    <b><i><p>{this.props.price} руб</p></i></b>
                    <div className="product-button">
                        <button type="button" style={button_style} className="btn btn-primary">Edit</button>
                        <button type="button" style={button_style} className="btn btn-danger">Remove</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Product
