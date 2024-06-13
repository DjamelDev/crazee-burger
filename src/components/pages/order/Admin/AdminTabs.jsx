import styled from "styled-components";
import Tab from "../../../reusable-ui/Tab.jsx";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../../theme/index.js";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext.jsx";

const AdminTabs = () => {
  const {
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
  } = useContext(OrderContext);

  const selectTab = (tabSelected) => {
    setIsCollapsed(false);

    if (tabSelected === "ajout") {
      setIsAddSelected(true);
      setIsEditSelected(false);
      console.log("AJOUT");
    }

    if (tabSelected === "edit") {
      setIsEditSelected(true);
      setIsAddSelected(false);
      console.log("EDIT");
    }
  };

  const tabsConfig = [
    {
      label: "",
      Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
      onClick: () => setIsCollapsed(!isCollapsed),
      className: isCollapsed ? "is-active" : "",
    },
    {
      label: "Ajouter un produit",
      Icon: <AiOutlinePlus />,
      onClick: () => selectTab("ajout"),
      className: isAddSelected ? "is-active" : "",
    },
    {
      label: "Modifier un produit",
      Icon: <MdModeEditOutline />,
      onClick: () => selectTab("edit"),
      className: isEditSelected ? "is-active" : "",
    },
  ];

  return (
    <AdminTabsStyled>
      {tabsConfig.map((tab) => {
        return (
          <Tab
            label={tab.label}
            Icon={tab.Icon}
            onClick={tab.onClick}
            className={tab.className}
          />
        );
      })}
    </AdminTabsStyled>
  );
};

export default AdminTabs;

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;

  .is-active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }

  button {
    margin-left: 1px;
  }
`;
