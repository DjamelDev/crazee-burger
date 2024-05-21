import React, { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";

const Menu = () => {
  const [products, setProducts] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.imageSource} alt={product.title} />
        </div>
      ))}
    </MenuStyled>
  );
};

export default Menu;

const MenuStyled = styled.div`
  background: purple;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;

  .product {
    background: #f5f5f7;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    width: 240px;
    height: 330px;
    border: 1px solid black;

    img {
      width: 200px;
      height: 145px;
      object-fit: cover;
      margin: 50px 20px 10px 20px;
    }
  }
`;
