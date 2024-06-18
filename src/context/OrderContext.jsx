import { createContext } from "react";

export default createContext({
  isModeAdmin: "",
  setIsModeAdmin: () => {},

  isCollapsed: true,
  setIsCollapsed: () => {},

  currentTabSelected: "",
  setCurrentTabSelected: () => {},
});
