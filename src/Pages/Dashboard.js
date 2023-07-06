import React from "react";

import Toolbar from "@mui/material/Toolbar";

import Nav from "../Components/Nav";

import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useApp } from "../context/app-context";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button } from "@mui/material";

import "../Login.css";

import { useEffect } from "react";
import { useState } from "react";
import "./Dashboard.css";
import axios from "axios";
const Dashboard = () => {

  
  const {
    batch,
    setBatch,
    from,
    setFrom,
    to,
    setTo,
    note,
    setNote,
    room,
    setRoom,
    teacher,
    setTeacher,
    subject,
    setSubject,
    date,
    setDate,
    lecCreated,
    setLecCreated,

    MyDataNew,
    SetMyDataNew,
    MyDataProfile,
    SetMyDataProfile,
    MyData,
    SetMyData,

    openCreate,
    setOpenCreate,

    userToken,
    setUserToken,
  } = useApp();
  const [DateFrom, setDateFrom] = useState([]);
  const [DateTo, setDateTo] = useState([]);

  const handleChangeSub = (event) => {
    setSubject(event.target.value);
    console.log(subject);
  };
  const handleChangeBatch = (event) => {
    setBatch(event.target.value);
    console.log(batch);
  };
  const handleChangeDateTo = (event) => {
    setDateFrom(event.target.value);
    console.log(DateFrom);
  };
  const handleChangeDateFrom = (event) => {
    setDateTo(event.target.value);
    console.log(DateTo);
  };
  let token = 0;

  if (userToken.length == 0) {
    token = JSON.parse(localStorage.getItem("accessToken"));
  } else {
    token = JSON.parse(userToken);
  }
  useEffect(() => {
    return () => {
      console.log(userToken);
    };
  }, []);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://attendanceportal.pythonanywhere.com/accounts/teacher-profile/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        SetMyDataProfile(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(MyDataProfile);
    // console.log(Array.isArray(MyDataProfile));
  }, []);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://attendanceportal.pythonanywhere.com/attendance/teachers-batch/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(response.data);
        SetMyDataNew(response.data);
        localStorage.setItem("MyDataNewLocal", JSON.stringify(response.data));
        // console.log(
        //   JSON.parse(localStorage.getItem("MyDataNewLocal")),
        //   "myDataNew"
        // );
      })
      .catch((error) => {
        console.log(error);
      });

    // console.log(MyDataNew);
    // console.log(Array.isArray(MyDataNew));
  }, []);

  let itemsSubject = [];
  for (let index = 0; index < MyDataProfile.subjects?.length; index++) {
    itemsSubject.push(
      <MenuItem value={MyDataProfile.subjects[index]?.id}>
        {MyDataProfile.subjects[index]?.name}
      </MenuItem>
    );
  }

  let items = [];
  for (let index = 0; index < MyDataNew.length; index++) {
    items.push(
      <MenuItem value={MyDataNew[index].id}>{MyDataNew[index].name}</MenuItem>
    );
  }
  ///////////////////////////
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    console.log(DateTo + " " + DateFrom + " " + subject + " " + batch + " ");
    const data = {
      start: DateFrom,
      end: DateTo,
      subject: subject,
      batch: batch,
    };
    const url =
      "https://attendanceportal.pythonanywhere.com/attendance/download-attendance-range/?";
    setLoading(true);
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "data.csv");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error downloading CSV file:", error);
        setLoading(false);
      });
  };

  const defaultTheme = createTheme();

  return (
    <Box sx={{ display: "flex" }}>
      <Nav />
      <Box
        component="main"
        className="cardTeacher"
        sx={{
          flexGrow: 1,
          mt: 0,
          width: "20rem",
          padding: "15px",
          position: "relative",
          top: "40px",
          marginLeft: "55px",
          marginRight: "60px",
        }}
      >
        <Toolbar />

        <form>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h4" sx={{ mt: 2 }}>
                Get Attendance
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                }}
              >
                From:
              </Typography>
              <TextField
                sx={{
                  width:"20vw",
                  mt: 2,
                }}
                type="date"
                onChange={handleChangeDateFrom}
                name="from"
                className="date"
              />
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                }}
              >
                To:
              </Typography>
              <TextField
                sx={{
                  width: "20vw",
                  mt: 2,
                }}
                onChange={handleChangeDateTo}
                type="date"
                name="to"
                className="date"
              />
            </Grid>

            <Grid item xs={12} lg={12} md={12}>
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                }}
              >
                Select Subject:
              </Typography>

              <FormControl>
                <InputLabel>Subject</InputLabel>
                <Select
                  className="subject"
                  labelId="From-id"
                  value={subject}
                  label="subject"
                  onChange={handleChangeSub}
                  sx={{
                    width: "50vw",
                    height: "50px",
                    background: "#FFFFFF",
                    padding: "28px",
                    mt: 2,
                    
                  }}
                  name="subject"
                >
                  {itemsSubject}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} lg={12} md={12}>
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                }}
              >
                Select Batch:
              </Typography>

              <FormControl>
                <InputLabel>Batch</InputLabel>
                <Select
                  className="batch"
                  labelId="From-id"
                  value={batch}
                  label="Batch"
                  onChange={handleChangeBatch}
                  sx={{
                    width: "50vw",
                    height: "50px",
                    background: "#FFFFFF",
                    padding: "28px",
                    mt: 2,
                  }}
                  name="batch"
                >
                  {items}
                </Select>
              </FormControl>
            </Grid>

            <Grid item lg={3} xs={10}>
              <Button
                className="LoginBtn"
                // type="submit"
                onClick={handleSubmit}
                variant="contained"
                sx={{
                  width: "100%",
                  marginTop: "2rem",
                  backgroundColor: "#0056D2",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#0056D2",
                    boxShadow: 5,
                  },
                }}
              >
                <Typography
                  className="LoginBtnTypo"
                  sx={{ fontSize: "20px", fontFamily: "Roboto:ital" }}
                >
                  Download
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default Dashboard;
