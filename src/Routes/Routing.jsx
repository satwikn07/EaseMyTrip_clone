import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SearchBox from '../Components/LandingPage/SearchBox'
import Navbar from '../Components/Navbar'

const Routing = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/bus">
                    <SearchBox />
                </Route>
            </Switch>
        </div>
    )
}

export default Routing
