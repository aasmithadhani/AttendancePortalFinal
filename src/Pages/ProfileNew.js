import React from "react";
import Nav from "../Components/Nav";
import Calendar from "react-calendar";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Toolbar from "@mui/material/Toolbar";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import { Typography, Button, Modal, Grid } from "@mui/material";
import Box from "@mui/material/Box";
// import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CancelIcon from "@mui/icons-material/Cancel";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AddIcon from "@mui/icons-material/Add";

import "./Profile.css";

// import DummyNew from './DummyNew';
import DummyNew from "../Components/DummyNew";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ListItemButton from "@mui/material/ListItemButton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LatestModal from "../Components/LatestModal";
import { useEffect } from "react";
import { useState } from "react";

// import { data } from "../Data/DummyData";
import { useApp } from "../context/app-context";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import axios from "axios";

const drawerWidth = 120;

const txtStyle = {
  //  fontFamily: 'Montserrat',
  fontFamily: "sans-serif",
  fontStyle: "normal",
  // fontWeight: 700,
  lineHeight: "35px",
  display: "flex",
  alignItems: "center",
  // textAlign: "center",
  // color:"blue"
};

function ProfileNew() {
  const current = new Date();
  const currentDate = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const navigate = useNavigate();
  //   const [data, setData] = useState([]);
  //getting posts

  const {
    search,
    selectedLecture,
    setSelectedLecture,
    // filterData,
    // setFilterData,
    setAll,
    all,
    data,

    batch,
    setBatch,
    from,
    setFrom,
    to,
    setTo,
    freq,
    setFreq,
    room,
    setRoom,
    teacher,
    setTeacher,
    subject,
    setSubject,
    date,
    setDate,

    MyData,
    SetMyData,
    MyDataProfile,
    SetMyDataProfile,

    userToken,
    setUserToken,
  } = useApp();

  // const [superSearch, setSuperSearch] = useState("");
  // console.log(superSearch);
  // const [search,setSearch] = useState('');
  // const [search,setSearch] = useState({});

  //IF we dont console log it keeps calling array even after we make chanes in modal
  // console.log(data);

  // const [item, setItem] = useState(data);
  // const [filterData, setFilterData] = useState(data);

  //NewProfile

  //Prev using local storage
  // const token = JSON.parse(localStorage.getItem("accessToken"));
  // console.log(token);

  //Using usestate

  //-----------------------Reload-------------------------
  // const token = JSON.parse(userToken);
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
  //-----------------------Reload-------------------------

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

  const [filterData, setFilterData] = useState(MyData);

  //previous code where we search through whole array
  {
    useEffect(() => {
      const newFilter = MyData.filter((data) => {
        return search.toUpperCase() === ""
          ? data
          : data?.subject.name?.includes(search.toUpperCase());
      });
      setFilterData(newFilter);
    }, [search]);
  }
  return (
    <Box sx={{ display: "flex" }}>
      <Nav />
      {MyDataProfile.length == 0 ? (
        <></>
      ) : (
        <>
          <Box
            component="main"
            className="card"
            sx={{
              flexGrow: 1,
              mt: 0,
              width: "20rem",
              padding: "15px",
              position: "relative",
              top: "40px",
              marginLeft: "35px",
              marginRight: "60px",
              //   display: "flex",
              //     flexDirection: "column",
              //     justifyContent: "center",
              //     alignItems:"center"
            }}
          >
            <Toolbar />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "40px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                className="Name"
                sx={{
                  fontWeight: 700,
                  color: "black",
                  fontSize: "2.5rem ",
                  //   flex: "1",
                }}
              >
                {MyDataProfile.user.first_name} {MyDataProfile.user.middle_name}{" "}
                {MyDataProfile.user.last_name}
              </Typography>
              <Typography
                className="position"
                style={txtStyle}
                sx={{ fontWeight: 100, color: "#000000de", fontSize: "24px" }}
              >
                {MyDataProfile.specialization} {search}
              </Typography>

              {/* <Calendar/>*/}
            </div>

            {/* <Paper elevation={1}> */}
            {/* </Paper> */}
            {/* New Code for the cards */}

            {/* {filterData.map((data) => ( */}
            <Grid container spacing={2}>
              {MyDataProfile.subjects.map((data) => (
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <Card
                    sx={{
                      // maxWidth: "100%",
                      display: "flex",
                      position: "relative",
                      // flexDirection: "row",
                      justifyContent: "space-between",
                      variant: "outlined",
                      borderRadius: "10px",
                      border: "2px solid #DEDEDE",
                      boxShadow: "none",
                      // margin: "0.8rem",
                      marginTop: "0.8rem",
                      flexBasis: "50%",
                      margin: "5px",
                    }}
                    className="Card"
                    // onClick={()=>{navigate('/class')}}
                  >
                    <CardContent>
                      <Box>
                        <Typography
                          style={txtStyle}
                          sx={{ fontWeight: 400, fontSize: "25px" }}
                          className="Heading"
                        >
                          Subject
                        </Typography>
                        <Typography
                          variant="body2"
                          color="#000000ab"
                          fontSize={"17px"}
                        >
                          Name: {data.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="#000000ab"
                          fontSize={"17px"}
                        >
                          ID: {data.id}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="#000000ab"
                          fontSize={"17px"}
                        >
                          Semester: {data.semester}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          marginBottom: "2px",
                          marginTop: "5px",
                        }}
                        className="Detail"
                      >
                        <Typography
                          style={txtStyle}
                          sx={{ fontWeight: 400, fontSize: "25px" }}
                          className="Heading"
                        >
                          Department
                        </Typography>
                        <Typography
                          variant="body2"
                          color="#000000ab"
                          fontSize={"17px"}
                        >
                          Name: {data.department.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="#000000ab"
                          fontSize={"17px"}
                        >
                          ID: {data.department.id}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            {/* previous Code for the cards */}
          </Box>
        </>
      )}
    </Box>
  );
}

export default ProfileNew;
