import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../Components/LandingPage/LandingPage'
import Navbar from '../Components/Navbar'
import { Filters } from '../Components/Filters/Filters'

const Routing = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/bus">
                    <LandingPage />
                </Route>
                <Route path="/filters">
                    <Filters />
                </Route>
            </Switch>
        </div>
    )
}

export default Routing
