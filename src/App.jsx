import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.scss";
import Dashboard from "./pages/Dashboard";

import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Register from "./pages/Register";

function App() {
  const location = useLocation();
  const [loginUser, setLoginUser] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoginUser(token);
    //console.log(token);
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        {/* <Route exact path="/appliance-ajo" element={<ApplianceAjo />} /> */}
      </Routes>
    </>
  );
}

export default App;
