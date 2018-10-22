import React from 'react'
// import './ActionLine.css'

export default class ProductModifyModal extends React.Component {

    constructor(props) {
        super(props);
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
                            <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span >&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.product_desc}
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={this.props.modal_state_update}
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
