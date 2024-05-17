import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../reusable-ui/TextInput";
import { BsPersonCircle } from "react-icons/bs";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { theme } from "../../../theme";

const LoginForm = () => {
  const [prenom, setPrenom] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPrenom("");
    navigate(`order/${prenom}`);
  };

  const handleInputChange = (e) => {
    setPrenom(e.target.value);
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <TextInput
        value={prenom}
        onChange={handleInputChange}
        placeholder={"Entrez votre prénom"}
        required
        Icon={<BsPersonCircle className="icon" />}
      />
      <PrimaryButton
        label={"Accéder à mon espace"}
        Icon={
          <IoChevronForward className="icon-chevron" onClick={handleSubmit} />
        }
      />
    </LoginFormStyled>
  );
};

const LoginFormStyled = styled.form`
  text-align: center;
  font-family: "Amatic SC", sans-serif;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  padding: 2.5rem ${theme.spacing.lg};

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  hr {
    border: 1.5px solid ${theme.colors.loginLine};
  }

  h2 {
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.white};
    margin: 20px 10px 18px;
  }

  .icon-chevron {
    margin-left: ${theme.spacing.xs};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default LoginForm;
