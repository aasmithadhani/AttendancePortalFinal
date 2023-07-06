import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import {
  Avatar,
  Button,
  Card,
  Checkbox,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import useForm from "../UseForm";
import library from "../images/library.PNG";
import logo from "../images/djLogo.PNG";
import { createTheme } from "@mui/material/styles";
import "../Login.css";
import validateInfoNew from "../Validation";

import { useNavigate } from "react-router-dom";
import { useApp } from "../context/app-context";

import axios from "axios";

import swal from "sweetalert";
//
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const paperStyle = {
  // display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "15px",
  marginBottom: "15px",
  width: "60rem",
  // width: "100%",
  // maxWidth:"80%",
  // padding: "35px",
};

const avatarStyle = { backgroundColor: "lightBlue" };
//

function ForgotPassword() {
  //functions for form validation
  const [isSubmitted, setIsSubmitted] = useState(false);

  // const { SetMyData, MyData } = useApp();

  // function submitForm() {
  //   setIsSubmitted(true);
  // }
  // const { handleChange, handleSubmit, values, errors } = useForm(
  //   submitForm,
  //   validateInfoNew,
  //   "login",
  //   SetMyData,
  //   MyData
  // );

  const navigate = useNavigate();

  //
  const [emailInput, setEmailInput] = useState();
  const handleChange = (event) => {
    setEmailInput(event.target.value);
    console.log(emailInput);
  };

  // const email = "meow@gmail.com";
  const email = emailInput;

  const url =
    "https://attendanceportal.pythonanywhere.com/accounts/password-reset/";

  const data = {
    email: email,
    // Add other properties as needed
  };
  const ResetPass = (e) => {
    e.preventDefault();
    axios
      .post(url, data)
      .then((response) => {
        // Handle the response data
        console.log(response.data);
        if (response.data.status === 200) {
          swal({
            title: "Mail sent!",
            text: response.data.message,
            icon: "success",
            button: "ok",
          });
        } else {
          swal({
            title: "Oh snap!",
            text: "Email doesn't exist. Please use your registered email",
            icon: "warning",
            button: "ok",
          });
        }
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
        swal({
          title: "Oops!",
          text: "Check your connection",
          icon: "error",
          button: "ok",
        });
      });
  };
  const bull = (
    <Box component="span" sx={{ color: "#0056D2", fontSize: "40px" }}>
      ․
    </Box>
  );

  return (
    <>
      <Box
        className="OuterMostBox"
        style={{ display: "flex" }}
        sx={{
          // backgroundColor: "#1589FF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          className="FirstBox"
          sx={{
            width: "40vw",
            height: "100vh",
            // backgroundColor: "#0055d2",
            backgroundColor: "#0056D2",
          }}
        />
        <Box
          className="SecondBox"
          sx={{
            width: "60vw",
            height: "100vh",
            backgroundColor: "#E9EBEB",
          }}
        />
        <Grid
          className="innerPaper"
          alignItems="center"
          justify="center"
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "90%",
          }}
        >
          <Paper
            elevation={10}
            style={paperStyle}
            alignItems="center"
            className="Paper"
          >
            <Grid fluidContainer spacing={2} className="lrGrid">
              {/* left side starts */}
              <Grid
                item
                xs={5.5}
                sx={{ padding: " 0px 30px" }}
                className="leftGrid"
              >
                {/* ----inserted padding */}
                <Box className="box">
                  <box className="imgBox">
                    <img
                      className="logoImage"
                      src={logo}
                      style={{
                        width: "50%",
                        objectFit: "cover",
                        borderRadius: "60px",
                        padding: "1rem",
                        boxSizing: "border-box",
                        display: "flex",
                      }}
                    ></img>
                  </box>
                  <Typography
                    sx={{ fontWeight: 400, fontSize: "2.5rem" }}
                    id="welcome"
                  >
                    Forgot Password<>{bull}</>
                    {/* Welcome Back */}
                    {/* <><img src={fullStop}/></> */}
                  </Typography>

                  <form onSubmit={ResetPass}>
                    <Grid align="center"></Grid>
                    <Box mb={1} mt={4}>
                      <Box mb={1}>
                        <TextField
                          className="SapIdTF"
                          variant="outlined"
                          label="email"
                          type="email"
                          autoComplete="email"
                          autoFocus
                          fullWidth
                          required
                          name="email"
                          // value={values.email}
                          onChange={handleChange}
                          placeholder="...@gmail.com"
                          sx={{ width: "100%" }}
                          width="80%"
                        />
                        {/* {errors.email && (
                          <Typography
                            color="#bcbcbc"
                            sx={{ fontWeight: 600, fontSize: "0.9rem" }}
                          >
                            {errors.email}
                          </Typography>
                        )} */}
                      </Box>
                      <Box mb={2.5}></Box>
                    </Box>
                    <Box mb={5}>
                      <Button
                        className="LoginBtn"
                        type="submit"
                        variant="contained"
                        sx={{
                          width: "100%",
                          backgroundColor: "#0056D2",
                          "&:hover": {
                            backgroundColor: "white",
                            color: "#0056D2",
                            boxShadow: 5,
                          },
                        }}
                      >
                        <Typography
                          className="SubmitBtnTypo"
                          sx={{ fontSize: "20px", fontFamily: "Roboto:ital" }}
                          onClick={() => {
                            ResetPass();
                          }}
                        >
                          Submit
                        </Typography>
                      </Button>
                    </Box>
                    <Typography sx={{ fontSize: "18px", mb: 2 }}>
                      Want to go back?
                      <span
                        id="BackToLogin"
                        sx={{ color: "#0056D2" }}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate("/");
                        }}
                      >
                        Login
                      </span>
                    </Typography>
                  </form>
                </Box>
              </Grid>
              {/* left side ends */}
              {/* right side starts */}
              <Grid
                item
                xs={6.5}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="rightGrid"
              >
                <img
                  src={library}
                  style={{
                    maxWidth: "100%",
                    width: "35rem",
                    objectFit: "cover",
                    borderRadius: "30px",
                    padding: "1rem",
                    boxSizing: "border-box",
                  }}
                ></img>
              </Grid>
              {/* right side ends */}
            </Grid>
          </Paper>
        </Grid>
      </Box>
    </>
  );
}

export default ForgotPassword;
