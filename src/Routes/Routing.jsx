import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../Components/LandingPage/LandingPage'
import Navbar from '../Components/Navbar'

const Routing = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/bus">
                    <LandingPage />
                </Route>
            </Switch>
        </div>
    )
}

export default Routing
