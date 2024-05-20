import React from "react";
import Logo from "../../reusable-ui/Logo";
import styled from "styled-components";
import { theme } from "../../../theme";
import NavbarRightSide from "./NavbarRightSide";

const Navbar = ({ username }) => {
  return (
    <NavbarStyled>
      <Logo />
      <NavbarRightSide username={username} />
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
`;
