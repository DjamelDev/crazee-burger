import React from "react";
import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import { refreshPage } from "../../../../utils/window";
import Logo from "../../../reusable-ui/Logo";
import { theme } from "../../../../theme";

const Navbar = () => {
  return (
    <NavbarStyled>
      <Logo className="logo-order-page" onClick={refreshPage} />
      <NavbarRightSide />
    </NavbarStyled>
  );
};

export default Navbar;

const NavbarStyled = styled.nav`
  background: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};

  .logo-order-page {
    cursor: pointer;
  }
`;
