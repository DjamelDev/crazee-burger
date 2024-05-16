import React from "react";
import LogoBurger from "../../../public/images/logo.png";
import styled from "styled-components";
import { theme } from "../../theme";

const Logo = () => {
  return (
    <LogoStyled>
      <h1>Crazee</h1>
      <img src={LogoBurger} alt="logo crazee-burger" />
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
    font-size: ${theme.fonts.size.P7};
    color: ${theme.colors.primary};
    line-height: 1em;
    letter-spacing: 1.5px;
    font-weight: ${theme.fonts.size.weights.bold};
  }

  img {
    object-fit: cover;
    object-position: center;
    height: 150px;
    width: 200px;
    margin: 0 ${theme.gridUnit / 2}px;
  }
`;

export default Logo;
