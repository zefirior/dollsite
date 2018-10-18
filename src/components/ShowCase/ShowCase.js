import React from 'react'
import Product from '../Product/Product'
import ActionLine from '../ActionLine/ActionLine'
import './ShowCase.css'


class ShowCase extends React.Component {
    price;

    constructor(props) {
        super(props);
        this.state = {show_type: props.show_type, products: []}
    }

    productsPromise() {
        return window.fetcher.getJsonPromise(
            'collections/' + this.state.show_type
        )
    }

    componentDidMount() {

        this.productsPromise().then(data => {
            let products = data.map(function (product) {
                console.log(product.id);
                return (<Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image_uuid={product.image_uuid}
                />)
            });
            this.setState({products: products});
        });

    }

    render() {

        return (
                <div className="container">
                    <div className="showcase">
                        <ActionLine />

                        {this.state.products}
                    </div>
                </div>
        )
    }

}

export default ShowCase
