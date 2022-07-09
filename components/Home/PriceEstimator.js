import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Rider from "../../public/assets/images/person_bike.png";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";

const scriptOptions = {
  googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY,
  libraries: ["places", "distance_matrix"],
};

const PriceEstimator = () => {
  const { isLoaded, loadError } = useLoadScript(scriptOptions);
  const [autocomplete, setAutocomplete] = useState(null);
  const [price, setPrice] = useState(0.0);
  const inputEl = useRef(null);
  const desttEl = useRef(null);

  // Handle the keypress for input
  const onKeypress = (e) => {
    // On enter pressed
    if (e.key === "Enter") {
      e.preventDefault();
      return false;
    }
  };

  const handleSubmit = (e) => {
    const from_location = document.getElementById("from_location").value;
    const to_location = document.getElementById("to_location").value;
    const geocoder = new google.maps.Geocoder();
    const service = new google.maps.DistanceMatrixService();

    service.getDistanceMatrix(
      {
        origins: [from_location],
        destinations: [to_location],
        travelMode: "DRIVING",
      },
      (data) => {
        setPrice(data.rows[0].elements[0].distance.text.split("")[0]);
        console.log(data);
      }
    );
  };

  const onLoad = (autocompleteObj) => {
    setAutocomplete(autocompleteObj);
  };

  const onPlaceChanged = (e) => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      // if ("place_id" in place) {
      //   router.push(`/place/${place.place_id}`);
      // }
    }
  };

  useEffect(() => {
    console.log();
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
                {isLoaded && (
                  <Autocomplete
                    onLoad={onLoad}
                    fields={["place_id"]}
                    onPlaceChanged={onPlaceChanged}
                  >
                    <input
                      ref={inputEl}
                      id="from_location"
                      type="text"
                      className="form-input block py-3 w-full rounded-md"
                      placeholder="Type keywords..."
                      onKeyPress={onKeypress}
                      name="from"
                    />
                  </Autocomplete>
                )}
              </div>
              <div className="col-lg-4  my-3">
                {isLoaded && (
                  <Autocomplete
                    onLoad={onLoad}
                    fields={["place_id"]}
                    onPlaceChanged={onPlaceChanged}
                  >
                    <input
                      ref={desttEl}
                      type="text"
                      className="form-input block py-3 w-full rounded-md"
                      placeholder="destination."
                      onKeyPress={onKeypress}
                      id="to_location"
                    />
                  </Autocomplete>
                )}
              </div>
              <div className="col-lg-4 my-3">
                <button
                  type="submit"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Check Price
                </button>
              </div>
            </div>
            <div className="price mt-5 d-flex justify-content-center align-items-center">
              <p>{price * 2} GHS</p>
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
