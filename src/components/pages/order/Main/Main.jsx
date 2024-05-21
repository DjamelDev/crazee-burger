import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

const Main = () => {
  return (
    <MainStyled>
      <div className="basket">Basket</div>
      <div className="menu">Menu</div>
    </MainStyled>
  );
};

export default Main;

const MainStyled = styled.div`
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  display: grid;
  grid-template-columns: 25% 1fr;

  .basket {
    background: pink;
  }

  .menu {
    background: purple;
  }
`;
