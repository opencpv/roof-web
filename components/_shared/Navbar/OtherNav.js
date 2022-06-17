import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Logo from "../Logo";
import RegisterButton from "./RegisterButton";

const OtherNav = () => {
  const router = useRouter();

  return (
    <Wrapper className="d-none d-md-block">
      <div className="container d-flex justify-content-between align-items-center nav-content">
        <Logo />
        <div className="d-flex align-items-center">
          <Link href={"#"}>
            <a className={router.pathname == "/" ? "active" : ""}>Home</a>
          </Link>
          <Link href={"#"}>
            <a className="mx-5">
              <RegisterButton text="Become an Agent"/>
            </a>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default OtherNav;
const Wrapper = styled.nav`
  height: 90px;
  width: 100%;
  background-color: black;

  .nav-content {
    height: 90px;
  }

  .active {
    color: #d03c17 !important;
    font-weight: 800;
  }
`;
