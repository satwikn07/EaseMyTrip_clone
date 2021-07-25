import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../Components/LandingPage/LandingPage'
import Navbar from '../Components/Navbar'
import { Buslist } from '../Components/Buslist/Buslist'
import {Review} from '../Components/payment/Review';

const Routing = () => {
    return (
        <div style={{width:"98.3vw"}}>
            <Navbar />
            <Switch>
                <Route exact path="/bus">
                    <LandingPage />
                </Route>
                <Route path="/buslist">
                    <Buslist />
                </Route>
                <Route path="/review">
                    <Review />
                </Route>
            </Switch>
        </div>
    )
}

export default Routing
