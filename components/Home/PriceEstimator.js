import Image from "next/image";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Rider from "../../public/assets/images/person_bike.png";
import { AddressAutofill } from "@mapbox/search-js-react";

const PriceEstimator = () => {
  const [sender, setSender] = useState("");

  const makeAPICall = async () => {
    try {
      const response = await fetch(
        "https://api.mapbox.com/geocoding/v5/mapbox.places/kwame%Nkrumah.json?access_token=pk.eyJ1Ijoia3NhZGFtcyIsImEiOiJjbDJhcGxiMDEwN3BrM2NxYXRzaXdmcmF2In0.YBh4c-K4Jrm_S8z_kPz6aw",
        { mode: "no-cors" }
      );
      const data = await response.json();
      console.log({ data });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    makeAPICall();
  }, []);

  return (
    <Wrapper className="container">
      <div className="row">
        <div
          className="col-lg-6 col-sm-12 "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="section-title ">Estimate Delivery Cost</h1>
          <p className="gray-text">
            By aggregating multiple delivery agents , we are able to offer
            compettitive <br></br>pricing advantages to our users
          </p>
          <div className="form-wrapper mt-4">
            <div className="row">
              <div className="col-lg-4 my-3">
                <AddressAutofill accessToken="pk.eyJ1Ijoia3NhZGFtcyIsImEiOiJjbDJhcGxiMDEwN3BrM2NxYXRzaXdmcmF2In0.YBh4c-K4Jrm_S8z_kPz6aw">
                  <input
                    name="address"
                    placeholder="Address"
                    type="text"
                    autoComplete="address-line1"
                  />
                </AddressAutofill>

                <input
                  type={"text"}
                  placeholder={"Pickup location"}
                  onChange={(e) => {
                    setSender(e.target.value);
                  }}
                />
              </div>
              <div className="col-lg-4  my-3">
                <input type={"text"} placeholder={"Destination"} />
              </div>
              <div className="col-lg-4 my-3">
                <button>Check Price</button>
              </div>
            </div>
            <div className="price mt-5 d-flex justify-content-center align-items-center">
              <p>0.00 GHS</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="shift-image">
            <Image src={Rider} alt="delivery image" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PriceEstimator;

const Wrapper = styled.section`
  padding-bottom: 128px;
  h1 {
    padding-top: 128px;
  }

  input {
    background: #ffffff;
    border: 2px solid #e97440;
    border-radius: 12px;
    padding-left: 16px;
    margin-right: 18px;
    width: 100%;
    height: 60px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.25);
  }

  p {
    padding: 0px;
    margin: 0px;
  }

  button {
    background: #000000;
    border: 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    height: 60px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */
    transition: 200ms;
    color: #ffffff;
    width: 100%;
  }

  button:hover {
    background-color: #e97440;
  }

  .price {
    width: 100%;
    height: 186px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-size: 64px;
    line-height: 77px;

    color: #ffffff;

    background: #e97440;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
  }

  .shift-image {
    margin-top: 7em;
  }

  @media (max-width: 645px) {
    padding-bottom: 0px;
    h1 {
      padding-top: 32px;
    }
  }
`;
