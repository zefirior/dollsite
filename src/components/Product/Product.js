import React from 'react'
import './Product.css'
import ProductImage from '../ProductImage/ProductImage'
import ProductModifyModal from '../ProductModifyModal/ProductModifyModal'

const button_style = {
    margin: "5px"
};

class Product extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modal_on: false,
        };

        this.modal_state_update = this.modal_state_update.bind(this);
    }

    modal_state_update(state) {
        this.setState({modal_on: state})
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
                            onClick={() => {this.modal_state_update(true)}}
                        >
                            <span>Edit</span>
                        </button>
                        <button
                            type="button"
                            style={button_style}
                            className="btn btn-danger"
                            onClick={this.props.remove_callback}
                        >Remove</button>
                    </div>
                    <ProductModifyModal
                        id={this.props.id}
                        modal_on={this.state.modal_on}
                        modal_state_update={() => {this.modal_state_update(false)}}
                        product_desc={this.props.name}
                    />
                </div>
            </div>
        )
    }

}

export default Product
