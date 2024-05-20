import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const Logo = ({ className, onClick }) => {
  return (
    <LogoStyled className={className} onClick={onClick}>
      <h1>Crazee</h1>
      <img src="/images/logo.png" alt="logo crazee-burger" />
      <h1>Burger</h1>
    </LogoStyled>
  );
};

const LogoStyled = styled.div`
  display: flex;
  align-items: center;

  h1 {
    display: inline;
    text-align: center;
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.primary};
    line-height: 1em;
    letter-spacing: 1.5px;
    font-weight: ${theme.fonts.size.weights.bold};
    text-transform: uppercase;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin: 0 ${theme.gridUnit / 2}px;
  }
`;

export default Logo;
