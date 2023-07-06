import React from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Login from "./Login";
import { useState, useEffect } from "react";

import { useApp } from "./context/app-context";

const PrivateRoute = () => {
  // const
  // {
  //     userToken,
  // setUserToken
  // } = useApp();

  let auth = localStorage.getItem("accessToken");
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
