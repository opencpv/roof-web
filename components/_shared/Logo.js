import Image from "next/image";
import styled from "styled-components";
import LogoImage from "../../public/assets/images/roof-logo.png";
const Logo = () => {
  return <Image src={LogoImage} alt="logo" />;
};

export default Logo;
