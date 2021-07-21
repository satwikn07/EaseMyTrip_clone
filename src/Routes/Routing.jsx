import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Routing = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/bus">
                    <h1>bus Components</h1>
                </Route>
            </Switch>
        </div>
    )
}

export default Routing
