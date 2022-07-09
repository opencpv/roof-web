import Image from "next/image";
import styled from "styled-components";
import Afford from "../../public/assets/images/afford 1.png";
import World from "../../public/assets/images/carriers 1.png";
import PayMent from "../../public/assets/images/payment 1.png";
import Support from "../../public/assets/images/support 1.png";
import { BsBox, BsTruck, BsShop } from "react-icons/bs";
import Playstore from "../../public/assets/images/Group 26.png";
import AppStore from "../../public/assets/images/en 1.png";
import Link from "next/link";
import RegisterButton from "../_shared/Navbar/RegisterButton";

const RoofBenefits = () => {
  return (
    <Wrapper>
      <div className="container ">
        <h1 className="text-center section-title">Why Roof</h1>
        <div className="row spacer">
          <div className="col-lg-3">
            <div className="d-flex justify-content-center">
              <Image src={Afford} alt="money icon" />
            </div>
            <p className="text-center px-5 gray-text py-3">
              We offer competitive pricing through multi agent services{" "}
            </p>
          </div>
          <div className="col-lg-3">
            <div className="d-flex justify-content-center">
              <Image src={Support} alt="money icon" />
            </div>
            <p className="text-center px-5 gray-text py-3">
              Your parcels can be sent across cities and regions in across Ghana
            </p>
          </div>
          <div className="col-lg-3">
            <div className="d-flex justify-content-center">
              <Image src={PayMent} alt="money icon" />
            </div>
            <p className="text-center px-5 gray-text py-3">
              Our pricing model is easy to understand. Platform does not include
              hidden charges.
            </p>
          </div>
          <div className="col-lg-3">
            <div className="d-flex justify-content-center">
              <Image src={World} alt="money icon" />
            </div>
            <p className="text-center px-5 gray-text py-3">
              We intergrate various delivery agents cargo, food and premium
              products.
            </p>
          </div>
        </div>
      </div>
      <div className="stats-wrapper">
        <div className="container">
          <h1 className="text-center section-title text-light mb-5 ">
            Our Current Performance
          </h1>

          <div className="row">
            <div className="col-lg-4 d-flex justify-content-lg-center justify-content-sm-start my-2">
              <div className="d-flex align-items-center justify-content-center">
                <BsBox className="stat-image" />
                <div className="px-3">
                  <h4>1000+</h4>
                  <p className="icon-text ">Completed Deliveries</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex justify-content-lg-center justify-content-sm-start my-2">
              <div className="d-flex align-items-center justify-content-center">
                <BsTruck className="stat-image" />
                <div className="px-3">
                  <h4>30+</h4>
                  <p className="icon-text ">Logistics Agents</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex justify-content-lg-center justify-content-sm-start my-2">
              <div className="d-flex align-items-center justify-content-center">
                <BsShop className="stat-image" />
                <div className="px-4">
                  <h4>50+</h4>
                  <p className="icon-text ">Businesses Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="deliver-for-us">
        <h1 className="section-title text-center">Looking to Deliver for us</h1>
        <p className="text-center gray-text">Download the roof app</p>
        <div className="d-flex position_img justify-content-center">
          <div className="position_img">
            <Link href={"#"}>
              <a>
                <Image src={Playstore} alt="playstore" />
              </a>
            </Link>
          </div>
          <div className="mx-4">
            <Link href={"#"}>
              <a>
                <Image src={AppStore} alt="appstore" />
              </a>
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-center my-3">
          {" "}
          <RegisterButton text={"Sign Up"} />
        </div>
      </div>
    </Wrapper>
  );
};

export default RoofBenefits;

const Wrapper = styled.section`
  padding-top: 140px;

  background: #f8f8f8;
  .spacer {
    margin-top: 48px;
    padding-bottom: 140px;
  }
  h1 {
    margin: 0px;
    padding: 0px;
  }
  .stats-wrapper {
    width: 100%;
    background-color: black;
    padding: 140px 0px;
  }
  .stat-image {
    width: 5em;
    height: 5em;
    color: #e97440;
  }

  h4 {
    padding: 0px;
    margin: 0px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 48px;
    /* identical to box height */

    color: #e97440;
  }

  .icon-text {
    font-family: "Poppins";
    margin: 0px;
    padding: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */

    color: #ffffff;
  }

  .deliver-for-us {
    padding: 140px 0px;
  }

  button {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    padding: 0.5em 2em;
    color: black;
  }
  @media (max-width: 645px) {
    .stats-wrapper {
      width: 100%;
      background-color: black;
      padding: 32px 0px;
    }
  }
`;
