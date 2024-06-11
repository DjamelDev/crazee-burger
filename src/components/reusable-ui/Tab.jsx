import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const Tab = ({ Icon, onClick, className }) => {
  return (
    <TabStyled onClick={onClick} className={className}>
      <div className="icon">{Icon}</div>
    </TabStyled>
  );
};

export default Tab;

const TabStyled = styled.button`
  border: 2px solid blue;
  height: 43px;
  padding: 0 22px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  left: 5%;
  top: 1%;
  cursor: pointer;

  // fonts
  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};

  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};

  // border
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};

  // border-radius
  border-radius: ${theme.borderRadius.round};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  &:hover {
    border-bottom: 2px solid ${theme.colors.white}; // Change color for testing
  }

  .icon {
    display: flex;
  }
`;
