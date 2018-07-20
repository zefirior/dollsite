import React from 'react'
import Article from './Article'
import 'bootstrap/dist/css/bootstrap.css'


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {articles: []};

    }

    componentDidMount() {
        fetch(
            'http://127.0.0.1:5000/lot'
        ).then(response => {
            return response.json()
        }).then(data => {
            let articles = data.map(function (article) {
                return (<Article key={article.id} name={article.name} desc={article.desc}/>)
            });
            this.setState({articles: articles});
        });
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>Dollsite</h1>
                </div>
                {this.state.articles}
            </div>
        )
    }
}

export default App
