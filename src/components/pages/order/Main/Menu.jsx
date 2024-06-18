import React, { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { formatPrice } from "../../../../utils/maths";
import Card from "../../../reusable-ui/Card";
import { theme } from "../../../../theme";

const Menu = () => {
  const [products, setProducts] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {products.map(({ title, imageSource, price, id }) => (
        <Card
          title={title}
          imageSource={imageSource}
          price={price}
          leftDescription={formatPrice(price)}
          key={id}
        />
      ))}
    </MenuStyled>
  );
};

export default Menu;

const MenuStyled = styled.div`
  border: 3px solid blue;
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
  overflow-y: scroll;
`;
