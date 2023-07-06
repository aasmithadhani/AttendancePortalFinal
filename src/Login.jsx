import React, { useEffect, useState } from "react";
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
import useForm from "./UseForm";
import validateInfo from "./garbage/validateInfo";
import library from "./images/library.PNG";
import logo from "./images/djLogo.PNG";
import { createTheme } from "@mui/material/styles";
import "./Login.css";
import validateInfoNew from "./Validation";
import fullStop from "./images/blueFullstop.png"

import { useNavigate } from 'react-router-dom';
import { useApp } from "./context/app-context";


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

function Login() {
  //functions for form validation
  const [isSubmitted, setIsSubmitted] = useState(false);


  const { SetMyData, MyData,userToken,setUserToken } = useApp();

  function submitForm() {
    setIsSubmitted(true);
  }
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validateInfoNew,
    "login",
    SetMyData, 
    MyData,
    userToken,
    setUserToken
  );

  const navigate = useNavigate();

  //

  const bull = (
    <Box
      component="span"
      sx={{ color:'#0056D2' , fontSize:'40px'}}
    >
      ․
    </Box>
  );

  // useEffect(() => {
  //   return () => {
  //     localStorage.clear();
  //   };
  // }, [])

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
              <Grid item xs={5.5} sx={{ padding: " 0px 30px"  }} className="leftGrid">
                {/* ----inserted padding */}
                <Box className="box" >
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
                      display:"flex"
                    }}
                  ></img>
                  </box>
                  <Typography sx={{ fontWeight: 400, fontSize: "2.5rem" }} id="welcome">
                    Welcome Back<>{bull}</>
                    {/* Welcome Back */}
                    {/* <><img src={fullStop}/></> */}
                  </Typography>
                  
                  <form onSubmit={handleSubmit}>
                    <Grid align="center">
                      {/* <Container maxWidth='xs' mb={4}  variant='outlined'
     color='primary'> */}
                    </Grid>
                    <Box mb={1} mt={4}>
                      <Box mb={1}>
                        {/* -----------------------------Removing the position Label above text-area
                        <Typography
                        className="SapIdTypo"
                          sx={{
                            postition: "relative",
                            display: "flex",
                            marginLeft: "10%",
                            fontWeight: 800,
                            fontSize: "1.2rem",
                          }}
                        >
                          Sap Id:
                        </Typography> */}
                        <TextField
                        className="SapIdTF"
                          variant="outlined"
                           label='Sap Id'
                          autoComplete="Sap Id"
                          autoFocus
                          placeholder="60004210XXX"
                          // fullWidth required     -----previous code
                          sx={{ width: "100%" }}
                          width="80%"
                          name="SapId"
                          value={values.SapId}
                          onChange={handleChange}
                        />
                        {errors.SapId && (
                          <Typography
                            color="#bcbcbc"
                            sx={{ fontWeight: 600, fontSize: "0.9rem" }}
                          >
                            {errors.SapId}
                          </Typography>
                        )}
                      </Box>

                      <Box mb={2}>
                      {/* -----------------------------Removing the position Label above text-area
                        <Typography
                        className="PasswordTypo"
                          sx={{
                            postition: "relative",
                            display: "flex",
                            marginLeft: "10%",
                            fontWeight: 800,
                            fontSize: "1.2rem",
                          }}
                        >
                          Password:
                        </Typography> */}
                        {/* <box sx={{width:'65%'}} display="flex"> */}
                        <TextField
                        className="PasswordTF"
                          variant="outlined"
                          type="Password"
                          placeholder="Password"
                          label='Password'
                          autoComplete="password"
                          //  fullWidth required     -----previous code
                          sx={{ width: "100%" ,mt:1,mb:1}}
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                        />
                        <div sx={{ display: "flex", flexDirection: "row" }}>
                          {errors.password && (
                            <Typography
                              color="#bcbcbc"
                              sx={{ fontWeight: 600, fontSize: "0.9rem" }}
                            >
                              {errors.password}
                            </Typography>
                          )}

                          <Typography to="/" sx={{ color: "#0056D2" }}
                           onClick={()=>{navigate('/forgotPassword')}} 
                           id="ForgotPass"
                           >
                            <strong>forgot password ?</strong>
                          </Typography>
                        </div>
                        {/* </box> */}

                        {/* <Typography mb={2} mt={4}> 
        <Link to='/'>forgot password?</Link>   -----previous code
      </Typography> */}
                      </Box>
                    </Box>
                    <Box mb={2}>
                      <Button
                      className="LoginBtn"
                        type="submit"
                        variant="contained"
                        sx={{ width: "100%" , backgroundColor:'#0056D2',
                        '&:hover': {
                            backgroundColor: 'white',
                            color: '#0056D2',
                            boxShadow: 5
                          }}}
                      >
                        <Typography className="LoginBtnTypo" sx={{fontSize:'20px', fontFamily:'Roboto:ital'}}>Login</Typography>
                      </Button>
                    </Box>

                    {/* <Typography className="SignUp">
                      Are you a faculty?
                      <Link to="/" sx={{ color: "#0056D2" }}>
                        <strong>Signup</strong>
                      </Link>
                    </Typography> */}
                    {/* </Container> */}
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
                  //direct pass to teacher but doesnt work with protected route
                  // onClick={()=>{navigate('/teacher')}}
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

export default Login;
