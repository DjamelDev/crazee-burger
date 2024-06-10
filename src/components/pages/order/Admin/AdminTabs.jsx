import React from "react";
import styled from "styled-components";
import Tab from "../../../reusable-ui/Tab.jsx";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const AdminTabs = () => {
  return (
    <AdminTabsStyled>
      <Tab Icon={<FiChevronDown />} />
    </AdminTabsStyled>
  );
};

export default AdminTabs;

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0;
`;
