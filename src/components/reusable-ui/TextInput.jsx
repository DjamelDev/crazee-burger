import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const Input = ({ value, onChange, Icon, ...extraProps }) => {
  return (
    <InputStyled>
      {Icon && Icon}
      <input value={value} type="text" onChange={onChange} {...extraProps} />
    </InputStyled>
  );
};

const InputStyled = styled.div`
  border-radius: ${theme.borderRadius.round};
  background: ${theme.colors.white};
  padding: 18px 24px;
  margin-bottom: 18px;
  display: flex;
  align-items: center;

  .icon {
    margin-right: ${theme.spacing.sm};
    width: 20px;
    height: 20px;
    color: ${theme.colors.greySemiDarkf};
  }

  input {
    border: none;
    color: ${theme.colors.dark};
    font-size: ${theme.fonts.size.P0};
    font-family: "Arial", sans-serif;
    width: 100%;
  }

  input::placeholder {
    color: ${theme.colors.greyMedium};
    background-color: ${theme.colors.white};
  }
`;

export default Input;
