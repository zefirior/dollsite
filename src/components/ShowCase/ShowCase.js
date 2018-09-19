import React from 'react'
import Product from '../Product/Product'


class ShowCase extends React.Component {

    constructor(props) {
        super(props);
        this.state = {show_type: props.show_type, products: []}
    }

    productsPromise() {
        return window.fetcher.getJsonPromise(
            'collections/' + this.state.show_type
        )
    }

    static packRow(productsPack) {
        return (
            <div className="row justify-content-around" style={{marginBottom: "20px"}}>
                {productsPack[0]}
                {productsPack[1]}
                {productsPack[2]}
            </div>
        )
    }

    componentDidMount() {
        this.productsPromise().then(data => {
            let products = data.map(function (product) {
                return (<Product key={product.id} name={product.name} price={product.price}/>)
            });
            this.setState({products: products});
        });

    }

    render() {

        let packs = [];
        for (let i = 0; i < this.state.products.length / 3; i++) {
            packs[i] = this.packRow(this.state.products.slice(3 * i, 3 * i + 3))
        }

        return (
                <div className="container">
                    <div className="jumbotron">
                        <h2>Hi! This is my showcase.</h2>
                    </div>

                    {packs}
                </div>
        )
    }

}

export default ShowCase
