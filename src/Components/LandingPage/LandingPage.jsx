import React from 'react'
import CarosalComponent from './CarosalComponent'
import Footer from './Footer'
import MidSection from './MidSection'
import SearchBox from './SearchBox'

const LandingPage = () => {
    return (
        <div>
            <SearchBox />
            <CarosalComponent />
            <MidSection />
            <Footer />
        </div>
    )
}

export default LandingPage
