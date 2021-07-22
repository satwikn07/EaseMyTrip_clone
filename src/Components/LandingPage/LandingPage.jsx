import React from 'react'
import CarosalComponent from './CarosalComponent'
import MidSection from './MidSection'
import SearchBox from './SearchBox'

const LandingPage = () => {
    return (
        <div>
            <SearchBox />
            <CarosalComponent />
            <MidSection />
        </div>
    )
}

export default LandingPage
