import React from 'react'
import Product from '../Product/Product'
import ActionLine from '../ActionLine/ActionLine'
import './ShowCase.css'


class ShowCase extends React.Component {
    price;

    constructor(props) {
        super(props);
        this.state = {products: []};
        this.productView = this.productView.bind(this);
        this.remove_product = this.remove_product.bind(this);
    }

    productsPromise() {
        return window.fetcher.getJsonPromise(
            'collections/' + this.props.show_type
        )
    }

    remove_product(key) {
        let products = this.state.products;
        for (let i = products.length - 1; i >= 0; i--){
            if (products[i].id === key) {
                products.splice(i, 1);
                break;
            }
        }
        this.setState({products: products})
    }

    componentDidMount() {

        this.productsPromise().then(data => {
            let products = data.map(function (product) {return product});
            this.setState({products: products});

        });

    }

    productView() {
        return this.state.products.map((product) => {
            return (<Product
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image_uuid={product.image_uuid}
                remove_callback={() => this.remove_product(product.id)}
            />)
        });
    }

    render() {

        return (
                <div className="container">
                    <div className="showcase">
                        <ActionLine action={this.console} />

                        {this.productView()}
                    </div>
                </div>
        )
    }

}

export default ShowCase
