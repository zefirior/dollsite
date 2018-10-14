import React from 'react'
import MainMenu from './MainMenu'
import ShowCase from './ShowCase/ShowCase'
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/App.css'
import { Route, Switch } from 'react-router-dom'


class App extends React.Component {

    render() {
        return (
            <div id='root_app'>
                <div id="main-menu">
                    <MainMenu />
                </div>
                <Switch>
                    <Route path="/show" component={() => (<ShowCase show_type="bublics"/>)} />
                    <Route path="/admin" component={MainMenu}/>
                </Switch>
            </div>
        )
    }
}

export default App
