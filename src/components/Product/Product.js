import React from 'react'
import './Product.css'
import ProductImage from '../ProductImage/ProductImage'
import ProductModifyModal from '../ProductModifyModal/ProductModifyModal'

const button_style = {
    margin: "5px"
};

class Product extends React.Component {

    constructor(props) {
        console.log(props);
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
                        <button
                            type="button"
                            style={button_style}
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target={"#exampleModalCenter_" + this.props.id}
                        >
                            <span>Edit</span>
                        </button>
                        <button type="button" style={button_style} className="btn btn-danger">Remove</button>
                    </div>
                    <ProductModifyModal id={this.props.id} />
                </div>
            </div>
        )
    }

}

export default Product
