import styled from "styled-components";
import Tab from "../../../reusable-ui/Tab.jsx";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../../theme/index.js";

const AdminTabs = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <AdminTabsStyled>
      <Tab
        label={""}
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      <Tab
        label={"Ajouter un produit"}
        Icon={<AiOutlinePlus />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      <Tab
        label={"Modifier un produit"}
        Icon={<MdModeEditOutline />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
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
