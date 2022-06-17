import Landing from "../components/Home/Landing";
import PriceEstimator from "../components/Home/PriceEstimator";
import RoofBenefits from "../components/Home/RoofBenefits";
import Footer from "../components/_shared/Footer/Footer";
import NavComponent from "../components/_shared/Navbar/NavComponent";

export default function Home() {
  return (
    <>
      <NavComponent />
      <Landing />
      <PriceEstimator/>
      <RoofBenefits/>
      <Footer/>
    </>
  );
}
