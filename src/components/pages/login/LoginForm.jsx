import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Chevron from "../../../../public/images/chevron.png";
import { BsPersonCircle } from "react-icons/bs";


const LoginForm = () => {
  const [prenom, setPrenom] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPrenom("");
    navigate(`order/${prenom}`);
  };
  
  return (
    <LoginFormStyled onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
        <div className="input-container">
        <BsPersonCircle className="icon"/>
          <input
            type="text"
            placeholder="Entrez votre prénom"
            required
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
        </div>
      <button>Accédez à mon espace<img src={Chevron} alt="" /></button>
      
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

  .input-container {

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
      color: rgba(211, 211, 211, 1);
      font-size: 15px;
      font-family: "Arial", sans-serif;
    }
 
  }


  button {
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

      img {
        background-color: rgba(255, 159, 27, 1);
      }
    }
    
    img {
      margin-left: 5px;
    }
  }
`;

export default LoginForm;
