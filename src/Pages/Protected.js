import React from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../images/djLogo.PNG";
import { Box } from "@mui/material";

function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("key1");
    if (!token) {
      navigate("/");
    }
  });
  return (
    <>
      <div>
        <Component />
      </div>
    </>
  );
}

export default Protected;
