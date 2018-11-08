import React from 'react'
import Product from '../Product/Product'
import ActionLine from '../ActionLine/ActionLine'
import './ShowCase.css'


class ShowCase extends React.Component {
    uuid;

    constructor(props) {
        super(props);
        this.state = {products: []};
        this.productView = this.productView.bind(this);
        this.remove_product = this.remove_product.bind(this);
    }

    productsPromise() {
        return window.fetcher.getJsonPromise(
            this.props.show_type + '/lst'
        )
    }

    _remove_product(key) {
        let products = this.state.products;
        for (let i = products.length - 1; i >= 0; i--){
            if (products[i].uuid === key) {
                products.splice(i, 1);
                break;
            }
        }
        this.setState({products: products})
    }

    remove_product(key) {
        let form = new FormData();
        form["uuid"] = key;
        form.append("uuid", key);

        const req = new Request(
            window.fetcher.wrapUrl(this.props.show_type + '/delete'),
            {
                method: 'POST',
                body: form
            }
        );

        fetch(req).then((response) => {
            if (response.ok) {
                this._remove_product(key)
            }
        })
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
                key={product.uuid}
                id={product.uuid}
                name={product.name}
                desc={product.desc}
                image_uuid={product.uuid}
                remove_callback={() => this.remove_product(product.uuid)}
            />)
        });
    }

    render() {

        let buttons = [
            (<button type="button" className="btn btn-success">Add</button>),
            (<button type="button" className="btn btn-success" onClick={this.props.action}>Info</button>)
        ];

        return (
                <div className="container">
                    <div className="showcase">
                        <ActionLine buttons={buttons} />

                        {this.productView()}
                    </div>
                </div>
        )
    }

}

export default ShowCase
