import React from "react";
import Nav from "../Components/Nav";
import { Box } from "@mui/system";
import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
import "./Class.css";

import { Skeleton,Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useApp } from "../context/app-context";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import axios from "axios";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Chart from "../Components/Chart";

import { useState, useEffect } from "react";

import swal from "sweetalert";
import { red } from "@mui/material/colors";

import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
// import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";

const drawerWidth = 120;
const txtStyle = {
  //  fontFamily: 'Montserrat',
  fontFamily: "sans-serif",
  fontStyle: "normal",
  fontWeight: 550,
  fontSize: "17px",
  lineHeight: "25px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Attendance = ({}) => {
  const {
    selectedLecture,
    data,
    BatchData,
    SetBatchData,
    MyDataNew,
    SetMyDataNew,

    presentStudent,
    setPresentStudent,
    absentStudent,
    setAbsentStudent,
    totalStudent,
    setTotalStudent,
    userToken,
    setUserToken,
    ReflectSubmit,
    setReflectSubmit,
  } = useApp();
  // console.log(BatchData);

  const [studentId, setStudentId] = useState();

  // console.log(selectedLecture.id);
  // console.log(studentId, "stdId");
  // console.log(BatchDataAttendance, "BatchDataAttendance");

  useEffect(() => {
    setAbsentStudent(0);
    setPresentStudent(0);
    setReflectSubmit("Submit");
  }, []);

  useEffect(() => {
    setAbsentStudent(0);
  }, []);

  // const token = JSON.parse(localStorage.getItem("accessToken"));
  // console.log(token);
  //-------------------------------------------------------------
  let lecture = 0;
  if (selectedLecture.length == 0) {
    // lecture = localStorage.getItem("LectureLocalStorage");
    lecture = JSON.parse(localStorage.getItem("LectureLocalStorage"));
    // console.log(lecture);
  } else {
    lecture = selectedLecture;
    // console.log(localStorage.getItem("LectureLocalStorage"));
  }
  //----------------------------------------------------------

  //Using usestate
  //-----------------------Reload-------------------------
  // const token = JSON.parse(userToken)
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
      url: "https://attendanceportal.pythonanywhere.com/attendance/teachers-batch/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data, "MyDataNew teacher-batch");
        SetMyDataNew(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // console.log(MyDataNew);
    // console.log(Array.isArray(MyDataNew));
  }, []);
  ////////////////////////////////////////////
  let MyDataNewTemp = 0;

  if (MyDataNew.length === 0) {
    MyDataNewTemp = JSON.parse(localStorage.getItem("MyDataNewLocal"));
  } else {
    MyDataNewTemp = MyDataNew;
  }
  /////////////////////////////////////////
  ////////////////////////////////////////////
  let BatchDataTemp = 0;

  if (BatchData.length === 0) {
    BatchDataTemp = JSON.parse(localStorage.getItem("BatchDataLocal"));
  } else {
    BatchDataTemp = BatchData;
  }
  /////////////////////////////////////////
  const BatchDataAttendance = MyDataNewTemp.find(
    (element) => element?.id === BatchDataTemp?.id
  );
  /////
  // useEffect(() => {
  //   return () => {
  //     console.log(MyDataNew, "1");
  //     console.log(BatchData, "2");
  //     console.log(BatchDataAttendance, "3");
  //   };
  // }, []);

  console.log(MyDataNewTemp, "1");
  console.log(BatchDataTemp, "2");
  console.log(BatchDataAttendance, "3");
  console.log(lecture, "SelectedLecture,lecture");

  // localStorage.setItem(
  //   "BatchDataAttendaLocal",
  //   JSON.stringify(BatchDataAttendance)
  // );
  // JSON.parse(localStorage.getItem("BatchDataAttendaLocal"));

  const [isTaken, setIsSubscribed] = useState(true);
  const [isNotTaken, setIsNotSubscribed] = useState(false);

  const handleChange = () => {
    setIsSubscribed((current) => !current);

    console.log(isTaken);
  };
  const handleChangeUV = (values) => {
    setIsSubscribed((current) => !current);

    // const [counter, setCounter] = useState(0);
    // if () {

    // }

    const isSelected = objectList.some(
      (selectedObject) => selectedObject.student === values.id
    );
    console.log(isSelected, "isSelected val");
    console.log(objectList, "ObjectList before Filtering");
    if (isSelected) {
      // Object is already selected, so remove it from the selectedObjects array
      const updatedSelectedObjects = objectList.filter(
        (selectedObject) => selectedObject.student !== values.id
      );
      setObjectList(updatedSelectedObjects);
      console.log(updatedSelectedObjects, "objectList after filtering");
      setPresentStudent(presentStudent - 1);
      setAbsentStudent(absentStudent + 1);
    } else {
      objectList.push(
        {
          present: true,
          lecture: lecture.id,
          // student: studentId,
          student: values.id,
          //extra so could be used later in update attendance
          name: values.name,
        }
        // ,
        // ...objectList
      );
      setPresentStudent((presentStudent) => presentStudent + 1);
      setAbsentStudent(absentStudent - 1);
      console.log(isTaken);
      console.log(objectList, "ObjectList after pushing");
    }
    console.log(((totalStudent - presentStudent) / totalStudent) * 100);
    console.log((presentStudent / totalStudent) * 100);
    console.log("Total", totalStudent);
    console.log("present", presentStudent);
    console.log("absent", absentStudent);
  };

  const handleChange2 = () => {
    setIsNotSubscribed((current) => !current);

    console.log(isNotTaken, "cross selected");
  };
  const axios = require("axios").default;
  const handleSubmit = () => {
    handleCheck();
    sendPostRequest();
  };

  const [MyDataNew1, SetMyDataNew1] = useState([]);

  //-----------------------Reload-------------------------
  // let BatchDataCommon = 0;

  // if (userToken.length == 0) {
  //   BatchDataCommon = JSON.parse(localStorage.getItem("accessToken"));
  // } else {
  //   BatchDataCommon = JSON.parse(userToken);
  // }
  // useEffect(() => {
  //   return () => {
  //     console.log(userToken);
  //   };
  // }, []);
  // //-----------------------Reload-------------------------
  let Data = JSON.stringify({
    batch: BatchDataAttendance?.id,
  });

  useEffect(() => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://attendanceportal.pythonanywhere.com/attendance/batch-data/",
      headers: {
        "Content-Type": "application/json",
      },
      data: Data,
    };
    axios
      .request(config)
      .then((response) => {
        console.log(response.data, "MyDataNew1 batch data");
        SetMyDataNew1(response.data);
        // setStudentId(response.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(MyDataNew1[0].id, "ABC");

  const [objectList, setObjectList] = useState([
    // { present: true, lecture: MyDataNew.id, student: studentId },
    // { present: false, lecture: selectedLecture.id, student: MyDataNew1[0].id },
    // { present: false, lecture: selectedLecture.id, student: 10 },
  ]);

  setTotalStudent(BatchDataAttendance?.number_of_students);

  // useEffect(() => {
  const handleCheck = () => {
    for (let i = 0; i < BatchDataAttendance?.number_of_students; i++) {
      let flag = 0;
      for (let j = 0; j < objectList?.length; j++) {
        if (MyDataNew1[i]?.id == objectList[j]?.student) {
          flag = 1;
          break;
        }
      }
      if (flag == 1) {
        console.log("ID " + MyDataNew1[i]?.id + " present in objList");
      } else {
        objectList.push({
          present: false,
          lecture: lecture?.id,
          student: MyDataNew1[i]?.id,
          //extra so could be used later in update attendance
          name: MyDataNew1[i]?.name,
        });
        setAbsentStudent(absentStudent + 1);
        console.log("pushed ID " + i + " in objList");
      }
    }
    console.log(objectList);
    console.log("Total", totalStudent);
    console.log("present", presentStudent);
    console.log("absent", absentStudent);
  };

  // for (let index = 0; index < BatchDataAttendance.number_of_students; index++) {
  //   objectList.push({
  //     present: false,
  //     llecture: selectedLecture.id,
  //     student: 2,
  //   });
  // }
  // console.log(objectList, "ObjectList");
  // console.log(MyDataNew1);
  const sendPostRequest = () => {
    const url =
      "https://attendanceportal.pythonanywhere.com/attendance/lecture-attendance/";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(objectList),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Objects uploaded successfully");
        console.log(objectList, "uploaded list");
        clearFalse();
        setReflectSubmit("Submit again");
        console.log("hi");
        swal({
          title: "Attendance taken!",
          // text: response.data.message,
          icon: "success",
          button: "ok",
        });
      })
      .catch((error) => {
        console.error("Error uploading objects:", error);
        console.log("Total", totalStudent);
        console.log("present", presentStudent);
        console.log("absent", absentStudent);
        swal({
          title: "Oops!",
          text: "Some error occured",
          icon: "error",
          button: "ok",
        });
      });
  };

  const clearFalse = () => {
    for (let j = 0; j < objectList?.length; j++) {
      console.log(objectList[j]?.present, "Present");
      if (objectList[j]?.present === false) {
        objectList.pop();
        console.log(objectList, "popping false");
      } else {
        console.log("no one absent");
      }
    }
  };

  let year = "";
  if (lecture.batch.semester == 1 || lecture.batch.semester == 2) {
    year = "FE";
  } else if (lecture.batch.semester == 3 || lecture.batch.semester == 4) {
    year = "SE";
  } else if (lecture.batch.semester == 5 || lecture.batch.semester == 6) {
    year = "TE";
  } else if (lecture.batch.semester == 7 || lecture.batch.semester == 8) {
    year = "BE";
  }

  const generateSkeletonCards = (count) => {
    const skeletonCards = [];
    for (let i = 0; i < count; i++) {
      skeletonCards.push(
        <Card
        variant="outlined"
        sx={{ display: "flex", flexDirection: "row",mb:2}}
        key={i}
      >
        <CardContent>
          <Typography level="h2" fontSize="md">
          <Skeleton animation="pulse" sx={{width:"40%"}}/>
          </Typography>
          <Typography level="body2" sx={{ mt: 0.5 }}>
          <Skeleton animation="pulse"  sx={{width:"10%"}}/>
          </Typography>
        </CardContent>
        <Skeleton animation="pulse" variant="circular" width={36} height={36}  sx={{mt:1}}/>
      </Card>
      );
    }
    return skeletonCards;
  };
  const numberOfSkeletonCards = 6;

  return (
    <Box sx={{ display: "flex" }}>
      <Nav />

      <Box
        component="main"
        className="MainBox"
        sx={{
          flexGrow: 1,
          marginLeft: "15px",
          pr: 10,
          mt: 10,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Grid container>
          <Grid item xs={12} md={6} lg={6}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {year} {BatchDataAttendance?.department.toUpperCase()}{" "}
              {BatchDataAttendance?.name}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                mt: 1,
                mb: 2,
              }}
            >
              {lecture.subject?.name}
            </Typography>

            {MyDataNew1.length == 0 ? (
              // <div>NO DATA</div>
              <>
                {generateSkeletonCards(numberOfSkeletonCards)}
              </>
            ) : (
              MyDataNew1?.map((values) => (
                <>
                   <Card
                  variant="outlined"
                  sx={{ display: "flex", flexDirection: "row",mb:2}}
                >
                  <CardContent>
                    <Typography level="h2" fontSize="md">
                      {values.name}
                    </Typography>
                    <Typography level="body2" sx={{ mt: 0.5 }}>
                      {values.id}
                    </Typography>
                  </CardContent>
                  <Checkbox
                          {...label}
                          icon={
                            <CancelIcon
                              fontSize="large"
                              sx={{ color: red[500] }}
                            />
                          }
                          checkedIcon={<CheckCircleIcon fontSize="large" />}
                          defaultChecked={false}
                          onChange={() => {
                            handleChangeUV(values);
                          }}
                          value={isTaken}
                        />
                </Card>
                </>
              ))
            )}
          </Grid>
          <Grid item xs={12} md={0} lg={2}></Grid>

          <Grid item xs={12} md={4} lg={4}>
            <Grid item xs={2} lg={0}></Grid>
            <Grid item xs={8} md={12} lg={12}>
              <Button
                className="buttonAttendance"
                sx={{ width: "10px", ml: "25%" }}
                onClick={handleSubmit}
              >
                <Typography style={txtStyle}>{ReflectSubmit}</Typography>
              </Button>
            </Grid>
            <Grid item xs={2} lg={0}></Grid>

            {/* <Grid item xs={12} md={12} lg={12} className="chart1" > */}
            <Chart />
            {/* </Grid> */}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Attendance;