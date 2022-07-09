import Landing from "../components/Home/Landing";
import PriceEstimator from "../components/Home/PriceEstimator";
import RoofBenefits from "../components/Home/RoofBenefits";
import Footer from "../components/_shared/Footer/Footer";
import NavComponent from "../components/_shared/Navbar/NavComponent";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <NavComponent />
      <Landing />
      <PriceEstimator />
      <RoofBenefits />
      <Footer />
    </>
  );
}
