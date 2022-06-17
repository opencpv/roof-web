import styled from "styled-components";

const RegisterButton = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

RegisterButton.defaultProps = {
  text: "Become an Agent",
};
export default RegisterButton;

const Wrapper = styled.button`
  border: 2px solid #d03c17;
  border-radius: 94px;
  padding: 8px 16px;
  font-weight: 500;
  color: white;
  transition: 200ms;
  background-color: transparent;

  :hover {
    background-color: #d03c17;
    color: black;
  }
`;
