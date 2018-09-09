import React from 'react'
import AuthorCard from './AuthorCard'
import MainMenu from './MainMenu'
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/App.css'


class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='root_app'>
                <div id="main-menu">
                    <MainMenu />
                </div>
                <div className="container">
                    <AuthorCard />
                    <AuthorCard />
                    <AuthorCard />
                    <AuthorCard />
                    <AuthorCard />
                    <AuthorCard />
                    <AuthorCard />
                </div>
            </div>
        )
    }
}

export default App
