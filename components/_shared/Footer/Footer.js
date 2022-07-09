import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <Wrapper className="py-2 container">
      <div className="d-flex justify-content-lg-between justify-content-sm-between justify-content-md-center align-items-center  w-100 ">
        <p className="my-2">© 2022 Roof Technology</p>
        <div className="d-flex my-2">
          <Link href={"/"}>
            <a>
              <div className="d-flex justify-content-center align-items-center social ">
                <FaFacebookF />
              </div>
            </a>
          </Link>

          <Link href={"/"}>
            <a>
              <div className="d-flex justify-content-center align-items-center social ">
                <FaTwitter />
              </div>
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <div className="d-flex justify-content-center align-items-center social ">
                <FaInstagram />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  width: 100vw;
  .social {
    background-color: #e97440;
    color: black;
    font-size: 1.5em;
    width:42px;
    height: 42px;
    border-radius: 64px;
    margin: 0px 8px;
    transition: 300ms;
  }
  p{
    margin: 0px;
  }
  .social:hover {
    background-color: black;
    color: #e97440;
  }
`;
