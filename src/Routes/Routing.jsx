import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../Components/LandingPage/LandingPage'
import Navbar from '../Components/Navbar'
import { Filters } from '../Components/Filters/Filters'
import { Buslist } from '../Components/Buslist/Buslist'

const Routing = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/bus">
                    <LandingPage />
                </Route>
                <Route path="/buslist">
                    <Buslist />
                </Route>
            </Switch>
        </div>
    )
}

export default Routing
