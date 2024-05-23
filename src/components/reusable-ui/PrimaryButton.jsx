import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const PrimaryButton = ({ Icon, label, onClick }) => {
  return (
    <PrimaryButtonStyled onClick={onClick}>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
};

export default PrimaryButton;

const PrimaryButtonStyled = styled.button`
  width: 100%;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative; //is used in case you want to create interactive icons where an icon replaces the text label.
  white-space: nowrap; //prevents the text label from wrapping to the next line.
  text-decoration: none; //removes the text decoration in case you’re applying the .btn class to a link.
  line-height: 1;

  padding: 18px 24px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 800;
  color: white;
  background-color: #ff9f1b;

  /* :active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  } */
`;

