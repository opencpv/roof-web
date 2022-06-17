import Link from "next/link";
import styled from "styled-components";
import Logo from "../Logo";
import RegisterButton from "./RegisterButton";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { CSSTransition, Transition } from "react-transition-group";

const MobileNav = () => {
  const [toggle, setToggle] = useState(false);

  const handleMenuClicked = () => {
    setToggle(!toggle);
  };

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0, visible: "collapse" },
  };

  return (
    <Wrapper>
      <div className="container d-flex justify-content-between align-items-center nav-content">
        <Logo />
        <button className="menu-button" onClick={handleMenuClicked}>
          <AiOutlineMenu />
        </button>
        <Transition in={toggle} timeout={200}>
          {(state) => (
            <div
              className="dropdown"
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <ul>
                <li>
                  <Link href={"#"}>
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <a>
                      <RegisterButton />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </Transition>
      </div>
    </Wrapper>
  );
};

export default MobileNav;

const Wrapper = styled.nav`
  height: 90px;
  width: 100%;
  background-color: black;

  .nav-content {
    height: 90px;
  }

  .dropdown {
    position: absolute;
    top: 90px;
    text-align: center;
    background-color: black;
    width: 100%;
    left: 0px;
    z-index: 999;
    border-top: 2px solid white;
  }

  .menu-button {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    border: 0px;
    background-color: #d03c17;
    color: white;
    font-size: 18px;
  }
  ul {
    margin: 0px;
    padding: 0px;
  }
  li {
    margin: 16px;
  }

  .my-node-enter {
    opacity: 0;
  }
  .my-node-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  .my-node-exit {
    opacity: 1;
  }
  .my-node-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`;
