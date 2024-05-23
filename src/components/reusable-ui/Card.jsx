import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import PrimaryButton from "./PrimaryButton";

const Card = ({ title, imageSource, leftDescription }) => {
  return (
    <CardStyled className="product">
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="info-text">
        <h2 className="title">{title}</h2>
        <div className="description">
          <p className="price">{leftDescription}</p>
          <PrimaryButton label={"Ajouter"} />
        </div>
      </div>
    </CardStyled>
  );
};

export default Card;

const CardStyled = styled.div`
  background: ${theme.colors.white};
  width: 240px;
  height: 330px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};

  img {
    width: 200px;
    height: 145px;
    object-fit: contain;
    margin: 50px 20px 10px 20px;
  }

  .info-text {
    margin: 0 20px 10px;
    width: 200px;

    h2 {
      font-family: "Amatic SC", cursive;
      font-size: ${theme.fonts.size.P4};
      font-weight: ${theme.fonts.weights.bold};
      margin-bottom: 10px;
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .description {
      display: flex;
      align-items: center;

      p {
        font-size: 16px;
        color: rgba(255, 160, 27, 1);
        /* font-family: "Open Sans"; */
      }

      button {
        margin-left: auto;
        background-color: rgba(255, 159, 27, 1);
        width: 95px;
        height: 38px;
        border: none;
        border-radius: ${theme.borderRadius.round};
        color: ${theme.colors.white};
        font-family: "Arial", sans-serif;
        font-weight: 700;
        font-size: 11px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
      }

      button:hover {
        background-color: ${theme.colors.background_white};
        border: 1px solid ${theme.colors.primary};
        color: ${theme.colors.primary};
        transition: all 0.3s ease-in-out;
      }
    }
  }
`;
