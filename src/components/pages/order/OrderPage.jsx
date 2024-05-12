import React from "react";
import { NavLink } from "react-router-dom";

const OrderPage = () => {
  return (
    <div>
      <h1>Bonjour</h1>
      <br />
      <NavLink to="/">
        <button>Déconnexion</button>
      </NavLink>
    </div>
  );
};

export default OrderPage;
