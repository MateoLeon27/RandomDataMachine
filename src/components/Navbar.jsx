import React from "react";
import styled from "styled-components";
import { Accessibility } from "./Accessibility";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";

const NavBarContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 4px rgba(15, 15, 15, 0.2);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
`;
const LeftSection = styled.div`
  display: flex;
`;
const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
`;

export function Navbar() {
  return (
    <NavBarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection>
        <NavLinks />
      </MiddleSection>
      <RightSection>
        <Accessibility />
      </RightSection>
    </NavBarContainer>
  );
}
export default Navbar;
