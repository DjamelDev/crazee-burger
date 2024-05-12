import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../src/components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage";
import Error from "./components/pages/error/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order/:id" element={<OrderPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
