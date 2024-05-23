import React, { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { formatPrice } from "../../../../utils/maths";
import Card from "../../../reusable-ui/Card";

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
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
`;
