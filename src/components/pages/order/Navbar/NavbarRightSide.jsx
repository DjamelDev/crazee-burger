import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import { theme } from "../../../../theme";

const NavbarRightSide = ({ username }) => {
  return (
    <NavbarRightSideStyled>
      {/* <div className="admin-button">Button admin</div> */}
      <Profile username={username} />
    </NavbarRightSideStyled>
  );
};

export default NavbarRightSide;

const NavbarRightSideStyled = styled.div`
  color: ${theme.colors.greyBlue};
  font-weight: 400;
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding-right: 50px;

  /* .admin-button {
    background: lightblue;
  } */
`;