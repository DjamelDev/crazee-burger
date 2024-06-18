import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import { getTabsConfig } from "./getTabsConfig.jsx";

const AdminPanel = () => {
  const { isAddSelected, isEditSelected, currentTabSelected } =
    useContext(OrderContext);

  const tabs = getTabsConfig(currentTabSelected);

  return (
    <AdminPanelStyled>
      {currentTabSelected === "add" && "Ajouter un produit"}
      {currentTabSelected === "edit" && "Modifier un produit"}
    </AdminPanelStyled>
  );
};

export default AdminPanel;

const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
