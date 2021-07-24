import React from "react";
import CarosalComponent from "./CarosalComponent";
import Footer from "./Footer";
import MidSection from "./MidSection";
import ScrollToTop from "./ScrollToTop";
import SearchBox from "./SearchBox";

const LandingPage = () => {
  return (
    <div>
      <ScrollToTop />
      <SearchBox />
      <CarosalComponent />
      <MidSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
