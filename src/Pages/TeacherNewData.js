import React from "react";
import Nav from "../Components/Nav";
import Calendar from "react-calendar";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Toolbar from "@mui/material/Toolbar";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import { Typography, Button, Modal } from "@mui/material";
import Box from "@mui/material/Box";
// import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CancelIcon from "@mui/icons-material/Cancel";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AddIcon from "@mui/icons-material/Add";

import "./Teacher.css";

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

import axios from "axios";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const drawerWidth = 120;

const txtStyle = {
  //  fontFamily: 'Montserrat',
  fontFamily: "sans-serif",
  fontStyle: "normal",
  // fontWeight: 700,
  fontSize: "30px",
  lineHeight: "35px",
  display: "flex",
  alignItems: "center",
  // textAlign: "center",
  // color:"blue"
};

const TeacherNewData = () => {
  const current = new Date();
  const currentDate = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const [alignment, setAlignment] = React.useState("All");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  // const [openCreate, setOpenCreate] = React.useState(false);
  const handleOpen = () => setOpenCreate(true);
  const handleClose = () => setOpenCreate(false);

  const navigate = useNavigate();
  //   const [data, setData] = useState([]);
  //getting posts

  const {
    search,
    selectedLecture,
    setSelectedLecture,
    filterData,
    setFilterData,
    setAll,
    all,

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
    MyDataNew,
    SetMyDataNew,
    MyDataProfile,
    SetMyDataProfile,
    openCreate,
    setOpenCreate,
    userToken,
    setUserToken,
  } = useApp();

  // const [superSearch, setSuperSearch] = useState("");
  const [tokenSaved, settokenSaved] = useState("");

  // here we have used stringify which converts it to string but we need a object
  // const token = JSON.stringify(localStorage.getItem("accessToken"));
  // console.log(token);

  //Here we used localstorage to get token
  // const token = JSON.parse(localStorage.getItem("accessToken"));

  //Here we have used use context and use state to get token
  // const token = JSON.parse(userToken);

  // useEffect(() => {
  //   settokenSaved(token);
  //   console.log(tokenSaved,"tokenSaved");
  // }, []);

  // settokenSaved(token);

  // console.log(token);

  //-----------------------Reload-------------------------
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
  // token = JSON.parse(localStorage.getItem("accessToken"));

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://attendanceportal.pythonanywhere.com/attendance/assigned-teacher-lecture/",
      headers: {
        Authorization: `Bearer ${token}`,
        // Authorization: `Bearer ${tokenSaved}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(response.data.Lectures);
        SetMyData(response.data.Lectures);
      })
      .catch((error) => {
        console.log(error);
        console.log("error");
      });
  }, []);

  // const [MyDataNew, SetMyDataNew] = useState([]);
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

  // console.log(MyDataNew, "SetMyDataNew");

  useEffect(() => {
    return () => {
      setTimeout(() => {
        filterItemLoad(MyData);
        console.log("Onlick func");
      }, 100);
    };
  }, [MyData]);

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
        // console.log(response.data);
        SetMyDataProfile(response.data);
        localStorage.setItem(
          "MyDataProfileLocal",
          JSON.stringify(response.data)
        );
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(MyDataProfile);
    // console.log(Array.isArray(MyDataProfile));
  }, []);

  const filterItemLoad = () => {
    const newItemL = MyData;
    // setItem(newItem);
    setFilterData(newItemL);
  };
  //upcoming lec taken attendance is false
  const filterItem1 = () => {
    const newItem1 = MyData.filter((data) => {
      return data.attendance_taken === false ? data : data[0];
      // return data.attendance_taken === false ? data : data[0];doubt about part after :
      // if part one is getting accepted why does the answer change when i change part 2
      // try using data[0] , data , data.attendance_taken
    });
    // setItem(newItem);
    setFilterData(newItem1);
  };

  //completed lec taken attendance is true
  const filterItem2 = () => {
    const newItem2 = MyData.filter((data) => {
      return data.attendance_taken === true ? data : data.attendance_taken;
      // return data.attendance_taken === true ? data : data.attendance_taken; doubt about part after :
      // is part one getting accepted
    });
    // setItem(newItem);
    setFilterData(newItem2);
  };

  useEffect(() => {
    const newFilterS = MyData.filter((filterData) => {
      return search.toUpperCase() === ""
        ? filterData
        : filterData?.subject.name?.includes(search.toUpperCase());
    });
    setFilterData(newFilterS);
  }, [search]);

  // useEffect(() => {
  //   const newFilterB = MyData.filter((filterData) => {
  //     return search.toUpperCase() === ""
  //       ? filterData
  //       : filterData?.batch.name?.includes(search.toUpperCase());
  //   });
  //   setFilterData(newFilterB);
  // }, [search]);

  //reversing the array
  const reversed = [...filterData].reverse();
  // useEffect(() => {
  //   return () => {
  // const reversed1 = [...filterData].reverse();
  // console.log(reversed1, "reversed new");
  //   };
  // }, [MyData]);

  useEffect(() => {
    return () => {
      console.log(reversed, "reversed");
    };
  }, []);

  //filter on basis of time
  // const old = reversed.filter((element) => element.date > currentDate - 50);
  // useEffect(() => {
  //   return () => {
  //     console.log(old, "old");
  //   };
  // }, []);
  // useEffect(() => {
  //   return () => {
  //     console.log(currentDate - 10, "old");
  //   };
  // }, []);
  return (
    // <Box
    // component="main"
    // sx={{ flexGrow: 1, pl: '10%',pr:'10%', width: '100%'}}>
    <Box sx={{ display: "flex" }}>
      <Modal
        open={openCreate}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <DummyNew/> */}
        <LatestModal />
      </Modal>

      {/* <Nav setSearch={superSearch =>setSuperSearch(superSearch)}/> */}
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
          marginLeft: "35px",
          marginRight: "60px",
        }}
      >
        <Toolbar />
        <Box
          id="BtnBox"
          sx={{ display: "flex", flexDirection: "row", flex: "1" }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "row", flex: "1" }}
            id="Togglebox"
          >
            <ToggleButtonGroup
              id="ToggleButtonGroup"
              display="flex"
              color="primary"
              // class="btn btn-primary btn-lg active"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
              sx={{ top: "60", marginBottom: "27px", color: "#0056D2" }}
              flex="1"
            >
              <ToggleButton
                value="Upcoming"
                className="button"
                onClick={() => filterItem1(MyData.attendance_taken)}
              >
                Upcoming
              </ToggleButton>

              <ToggleButton
                value="Completed"
                className="button"
                onClick={() => filterItem2(MyData.attendance_taken)}
              >
                Completed
              </ToggleButton>
              <ToggleButton
                value="All"
                className="button"
                id="All"
                onClick={() => filterItemLoad(MyData)}
              >
                All
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
          {/* <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              margin: "0.6rem",
            }}
          >
            <Button onClick={handleOpen}>
              <AddIcon></AddIcon>
            </Button>
          </Box> */}
          <Box id="AddBox">
            <ListItemButton
              onClick={handleOpen}
              sx={{
                boxShadow: 2,
                borderRadius: "0.5em",
                maxWidth: "90%",
                // justifyContent:"right"
              }}
              id="AddBtn"
            >
              <AddOutlinedIcon fontSize="large" />
            </ListItemButton>
          </Box>
        </Box>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "20px",
          }}
        >
          <Typography
            className="currentDate"
            style={txtStyle}
            sx={{ fontWeight: 700, color: "#0056D2" }}
          >
            {currentDate}
          </Typography>
          <Typography
            className="currentDate"
            style={txtStyle}
            sx={{ fontWeight: 100, color: "#0056d2cf" }}
          >
            &nbsp;
            {/* Today */}
            {/* {search} */}
            {search}
          </Typography>
          {/* <Calendar/>*/}
        </div>

        {/* <Paper elevation={1}> */}
        {/* <Link to="/class"> */}

        {/* {filterData.map((data) => ( */}
        {filterData.length == 0 ? (
          <div>
            Loading....
            <span
              onClick={() => filterItemLoad(MyData)}
              style={{ textDecorationLine: "underline" }}
              id="clickHere"
            >
              click here
            </span>
          </div>
        ) : (
          // filterData?.map((data) => (
          reversed?.map((data) => (
            <>
              <Card
                sx={{
                  maxWidth: "100%",
                  display: "flex",
                  position: "relative",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  variant: "outlined",
                  borderRadius: "10px",
                  border: "2px solid #DEDEDE",
                  boxShadow: "none",
                  // margin: "0.8rem",
                  marginTop: "0.8rem",
                }}
                className="Card"
                // onClick={()=>{navigate('/class')}}
                // onClick={() => {
                //   //   setSelectedNews(data);
                //   setSelectedLecture(data);
                //   console.log(data);
                //   navigate(`/class/${data.id}`);
                //   // console.log(data);
                // }}
                key={data.id}
              >
                <CardContent>
                  <Box>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={txtStyle}
                      sx={{ fontWeight: 450 }}
                      className="Heading"
                    >
                      Subject : {data.subject.name}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: "2px",
                    }}
                    className="Detail"
                  >
                    <Typography
                      variant="body2"
                      color="#000000ab"
                      fontSize={"17px"}
                      marginRight={"10px"}
                    >
                      {data.startTime} - {data.endTime}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#000000ab"
                      fontSize={"17px"}
                    >
                      Batch Name: {data.batch.name}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: "2px",
                    }}
                    className="Detail"
                  >
                    <Typography
                      variant="body2"
                      color="#000000ab"
                      fontSize={"17px"}
                      // sx={{ marginRight: "5px" }}
                    >
                      Note: {data.note}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#000000ab"
                      fontSize={"17px"}
                    >
                      Lec Id: {data.id}
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions sx={{ float: "right" }}>
                  <Button
                    size="40rem"
                    onClick={() => {
                      //   setSelectedNews(data);
                      setSelectedLecture(data);
                      localStorage.setItem(
                        "LectureLocalStorage",
                        JSON.stringify(data)
                      );
                      navigate(`/class/${data.id}`);
                      // localStorage.setItem("classId", data.id);
                      // console.log(data);
                    }}
                  >
                    <ArrowCircleRightIcon
                      fontSize="large"
                      color="blue"
                      variant="filled"
                    />
                  </Button>
                </CardActions>
              </Card>
            </>
          ))
        )}
      </Box>
    </Box>
  );
};

export default TeacherNewData;
