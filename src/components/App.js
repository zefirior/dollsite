import React from 'react'
import Article from './Article'


class App extends React.Component {

    constructor(props) {
        super(props);
        console.log('---', 'Hello world');
        const lots = fetch('/lot').then(function (response) {
            return response.json()
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
