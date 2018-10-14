import React from 'react'
import './ProductImage.css'


class ProductImage extends React.Component {
    image_uuid;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img className="productImage card-img-top"
                 src={window.app_config.BACK_STORAGE_URL + this.props.image_uuid} />
        )
    }

}

export default ProductImage
