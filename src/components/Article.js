import React from 'react'


class Article extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h2>Article</h2>
                </div>
                <div className="card-body">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.desc}</p>
                </div>
            </div>
        )
    }

}

export default Article
