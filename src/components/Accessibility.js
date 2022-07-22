import styled from "styled-components";
import SearchBox from "./SearchBox";
const AccessContainer = styled.div`
  display: flex;
`;
const RegisterButton = styled.button`
border: 0;
outline: 0;
padding: 8px 1em;
padding-right: 10
color: #B44FBD;
font-size: 14px;
font-weight: 600;
border-radius: 20px;
background-color: #86E629
background-image: linear-gradient(to right, transparent 0%, #19cdd8 100%);
transition: all 240ms ease-in-out;
cursor: pointer;
margin-right: 35px;
&:hover {
  background-color: #19cdd8
}

&:not(:last-of-type) {
  margin-right: 8px
}
`;
const LoginButton = styled.button`
border: 0;
outline: 0;
padding: 8px 1em;
color: #B44FBD;
font-size: 14px;
font-weight: 600;
border-radius: 20px;
background-color: #86E629
background-image: linear-gradient(to right, transparent 0%, #19cdd8 100%);
transition: all 240ms ease-in-out;
cursor: pointer;
margin-right: 35px;
&:hover {
  background-color: #19cdd8
}

&:not(:last-of-type) {
  margin-right: 8px
}
`;
export function Accessibility() {
  return (
    <AccessContainer>
      <SearchBox></SearchBox>
      <RegisterButton>Register</RegisterButton>
      <LoginButton>Login</LoginButton>
    </AccessContainer>
  );
}
