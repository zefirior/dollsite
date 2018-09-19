import React from 'react'
import AuthorCard from './AuthorCard'
import MainMenu from './MainMenu'
import ShowCase from './ShowCase/ShowCase'
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/App.css'


class App extends React.Component {

    render() {
        return (
            <div id='root_app'>
                <div id="main-menu">
                    <MainMenu />
                </div>
                {/*
                <div className="container">
                    <AuthorCard />
                </div>
                */}
                <ShowCase show_type="bublics"/>
            </div>
        )
    }
}

export default App
