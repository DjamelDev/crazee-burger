import React from 'react';
import LogoBurger from "../../../public/images/logo.png";
import styled from 'styled-components';

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
    font-size: 110px;
    color: rgba(255, 160, 27, 1);
    line-height: 1em;
    letter-spacing: 1.5px;
    font-weight: 700;
  }

  img {
    object-fit: cover;
    object-position: center;
    height: 150px;
    width: 200px;
    margin: 0 5px;
  }
`;

export default Logo;