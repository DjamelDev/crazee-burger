import React from "react";
import styled from "styled-components";

const PrimaryButton = ({ Icon, label, onClick }) => {
  return (
    <PrimaryButtonStyled onClick={onClick}>
      <span>{label}</span>
      {Icon && <div className="icon">{Icon}</div>}
    </PrimaryButtonStyled>
  );
};

const PrimaryButtonStyled = styled.button`
  background-color: rgba(255, 159, 27, 1);
  border: 1px solid rgba(255, 159, 27, 1);
  border-radius: 5px;
  color: rgba(255, 255, 255, 1);
  font-size: 15px;
  font-family: "Arial", sans-serif;
  font-weight: 700;
  width: 400px;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    color: rgba(255, 159, 27, 1);
  }
`;

export default PrimaryButton;