import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>ErrorPage</h1>
      <NavLink to="/">
        <button>Retourner à la page d'accueil</button>
      </NavLink>
    </div>
  );
};

export default Error;
