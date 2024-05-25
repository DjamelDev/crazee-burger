import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import { theme } from "../../../../theme";
import ToggleButton from "../../../reusable-ui/ToggleButton";

const NavbarRightSide = ({ username }) => {
  return (
    <NavbarRightSideStyled>
      <ToggleButton
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
      />
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
`;
