import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../reusable-ui/TextInput";
import { BsPersonCircle } from "react-icons/bs";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

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
  padding: 2.5rem 2rem;

  h1 {
    color: rgba(255, 255, 255, 1);
    font-size: 48px;
  }

  hr {
    border: 1.5px solid rgba(245, 106, 44, 1);
  }

  h2 {
    font-size: 36px;
    color: rgba(255, 255, 255, 1);
    margin: 20px 10px 18px;
  }

  .icon-chevron {
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default LoginForm;
