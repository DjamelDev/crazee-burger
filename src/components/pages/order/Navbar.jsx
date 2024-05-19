import React from "react";
import Logo from "../../reusable-ui/Logo";
import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import styled from "styled-components";
import { theme } from "../../../theme";
import NavbarRightSide from "./NavbarRightSide";

const Navbar = ({ username }) => {
  return (
    <NavbarStyled>
      <div className="left-side">
        <Logo />
      </div>
      <NavbarRightSide user={username} />
    </NavbarStyled>
  );
};

export default Navbar;

const NavbarStyled = styled.nav`
  background: ${theme.colors.background_white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-side {
    margin-left: 20px;
  }
`;
