import React from "react";
import styled from "styled-components";
import TrinityLogoImg from "../images/trinitywh.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
width: 45px;
height: 45px;
margin-top: 8px;
img {
  width: 100%:
  height: 100%:
}
`;

const LogoText = styled.h2`
  font-size: 35px;
  margin: 0;
  margin-left: 10px;
  color: #19cdd8;
  font-weight: 500;
  font-family: Papyrus;
`;

export function Logo() {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={TrinityLogoImg} alt="Trinity logo" width="40" height="40" />
      </LogoImg>
      <LogoText>
       
        <strong style={{ paddingTop: '50px',}}>Serenity</strong>
      </LogoText>
    </LogoWrapper>
  );
}
