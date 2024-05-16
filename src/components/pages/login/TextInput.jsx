import React from "react";
import styled from "styled-components";

const Input = ({ value, onChange, Icon, ...extraProps }) => {
  return (
    <InputStyled>
      {Icon && Icon}
      <input value={value} type="text" onChange={onChange} {...extraProps} />
    </InputStyled>
  );
};

const InputStyled = styled.div`
  border-radius: 5px;
  background: rgba(255, 255, 255, 1);
  padding: 18px 24px;
  margin-bottom: 18px;
  display: flex;
  align-items: center;

  .icon {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    color: grey;
  }

  input {
    border: none;
    color: black;
    font-size: 15px;
    font-family: "Arial", sans-serif;
    width: 100%;
  }

  input::placeholder {
    color: rgba(211, 211, 211, 1);
  }
`;

export default Input;
