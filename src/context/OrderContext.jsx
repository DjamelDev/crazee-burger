import { createContext } from "react";

export default createContext({
  isModeAdmin: "",
  setIsModeAdmin: () => {},

  isCollapsed: true,
  setIsCollapsed: () => {},

  isAddSelected: true,
  setIsAddSelected: () => {},

  isEditSelected: false,
  setIsEditSelected: () => {},

  currentTabSelected: "",
  setCurrentTabSelected: () => {},
});
