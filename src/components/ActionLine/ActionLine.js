import React from 'react'
import './ActionLine.css'

export default class ActionLine extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="actionLine jumbotron container" style={{backgroundColor: "#ffa7e0", padding: "2em"}}>
                <div className="row">
                    <div className="col-sm">
                        <h4>Hi! This is my showcase.</h4>
                    </div>
                    <div className="col-sm">
                        <div className='btn-group'>
                            {this.props.buttons}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
