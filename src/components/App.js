import React from 'react'
import Article from './Article'


class App extends React.Component {

    constructor(props) {
        super(props);
        console.log('---', 'Hello world');
        const lots = fetch(
            'http://127.0.0.1:5000/lot'
        ).then(function (response) {
            return response.json()
        }).then(function (data) {
            data.forEach(function (element) {
                console.log('---', element)
            })
        });
        console.log('---', lots)
    }

    render() {
        return (
            <div>
                <h1>App name</h1>
                <Article/>
            </div>
        )
    }
}

export default App
