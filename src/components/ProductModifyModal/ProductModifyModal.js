import React from 'react'
// import './ActionLine.css'

export default class ProductModifyModal extends React.Component {

    product_name;
    product_desc;

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.product_name,
            desc: this.props.product_desc
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeDesc = this.handleChangeDesc.bind(this);
    }

    handleChangeName(event){
        this.setState({name: event.target.value});
    }

    handleChangeDesc(event){
        this.setState({desc: event.target.value});
    }

    render() {

        let display = 'None';
        if (this.props.modal_on) {
            display = "block";
        }

        return (
            <div
                className="modal fade show"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
                style={{display: display}}
            >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Edit merch</h5>
                            <button type="button" className="close" aria-label="Close" onClick={this.props.modal_state_update}>
                                <span >&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <lable>Name</lable>
                                <input type='text' className="form-control" value={this.state.name} onChange={this.handleChangeName} />
                            </div>
                            <div className="form-group">
                                <lable>Desc</lable>
                                <input type='text' className="form-control" value={this.state.desc} onChange={this.handleChangeDesc} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={this.props.modal_state_update}
                            >
                                Cancel
                            </button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
