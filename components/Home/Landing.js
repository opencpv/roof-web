import Image from "next/image";
import styled from "styled-components";
import Playstore from "../../public/assets/images/Group 26.png";
import AppStore from "../../public/assets/images/en 1.png";
import Link from "next/link";
import LandingImage from "../../public/assets/images/landing_image.png";
const Landing = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 data-aos="fade-up" data-aos-duration="1500">
              Fast, affordable and reliable logistics aggregator.
            </h1>
            <h2
              className="mt-4"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="1500"
            >
              Deliver your goods in 3 steps - Request - Send - Confirm
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="2500"
            >
              Download the roof app
            </p>
            <div
              className="d-flex position_img"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="3000"
            >
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
          </div>

          <div className="col-lg-6 side-image d-flex justify-content-end">
            <Image src={LandingImage} alt="person delivering" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;

const Wrapper = styled.section`
  background-color: #e97440;
  h1 {
    padding-top: 1em;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 96px;
    color: white;
  }

  h2 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
  }

  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  .side-image {
    padding: 0px;
  }
`;
