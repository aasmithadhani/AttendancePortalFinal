
 
*/
import React from "react";
import Nav from "../Components/Nav";
import { Box } from "@mui/system";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import "./Class.css";

import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useApp } from "../context/app-context";

import Checkbox from "@mui/material/Checkbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import axios from "axios";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import Chart from "../Components/Chart";

import { useState, useEffect } from "react";

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

const AttendanceGarbage = ({}) => {
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
    setReflectSubmit("Submit");
  }, []);

  useEffect(() => {
    setAbsentStudent(0);
  }, []);

  // const token = JSON.parse(localStorage.getItem("accessToken"));
  // console.log(token);

  //Using usestate
  const token = JSON.parse(userToken);

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

  const BatchDataAttendance = MyDataNew.find(
    (element) => element?.id === BatchData?.id
  );

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
          lecture: selectedLecture.id,
          // student: studentId,
          student: values.id,
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

  let Data = JSON.stringify({
    batch: BatchDataAttendance.id,
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

  setTotalStudent(BatchDataAttendance.number_of_students);

  // useEffect(() => {
  const handleCheck = () => {
    for (let i = 0; i < BatchDataAttendance.number_of_students; i++) {
      let flag = 0;
      for (let j = 0; j < objectList.length; j++) {
        if (MyDataNew1[i].id == objectList[j].student) {
          flag = 1;
          break;
        }
      }
      if (flag == 1) {
        console.log("ID " + MyDataNew1[i].id + " present in objList");
      } else {
        objectList.push({
          present: false,
          lecture: selectedLecture.id,
          student: MyDataNew1[i].id,
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
      })
      .catch((error) => {
        console.error("Error uploading objects:", error);
        console.log("Total", totalStudent);
        console.log("present", presentStudent);
        console.log("absent", absentStudent);
      });
  };

  const clearFalse = () => {
    for (let j = 0; j < objectList.length; j++) {
      console.log(objectList[j].present, "Present");
      if (objectList[j].present === false) {
        objectList.pop();
        console.log(objectList, "popping false");
      } else {
        console.log("no one absent");
      }
    }
  };

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
              SE COMPUTER ENGINEERING A3
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                mt: 1,
                mb: 2,
              }}
            >
              Computer Networks
            </Typography>

            {MyDataNew1.length == 0 ? (
              <div>NO DATA</div>
            ) : (
              MyDataNew1?.map((values) => (
                <>
                  <Paper elevation={2}>
                    <Grid container sx={{ mb: 1, mt: 1 }}>
                      <Grid item xs={6} sx={{ ml: 1 }} lg={7} key={values.id}>
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                          {values.id}
                          {/* {setStudentId(values.id)} */}
                        </Typography>
                        <Typography variant="h6">{values.name}</Typography>
                      </Grid>
                      <Grid item lg={2} xs={0} md={0}></Grid>
                      <Grid item xs={2} lg={1.5}>
                        <Checkbox
                          {...label}
                          icon={<CheckCircleOutlineIcon fontSize="large" />}
                          checkedIcon={<CheckCircleIcon fontSize="large" />}
                          defaultChecked={false}
                          onChange={() => {
                            handleChangeUV(values);
                          }}
                          // onClick={() => {
                          //   setStudentId(values.id);
                          // }}
                          value={isTaken}
                        />
                      </Grid>
                      {/* <Grid item xs={2} lg={1}>
                        <Checkbox
                          {...label}
                          icon={<CancelOutlinedIcon fontSize="large" />}
                          checkedIcon={<CancelIcon fontSize="large" />}
                          defaultChecked={false}
                          onChange={handleChange2}
                          value={isNotTaken}
                        />
                      </Grid> */}
                    </Grid>
                  </Paper>
                </>
              ))
            )}
          </Grid>
          <Grid item xs={12} md={0} lg={2}></Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Button
              className="buttonAttendance"
              sx={{ width: "10px", ml: "25%" }}
              onClick={handleSubmit}
            >
              <Typography style={txtStyle}>{ReflectSubmit}</Typography>
            </Button>
            {/* <Button
              className="buttonAttendance"
              sx={{ width: "10px", ml: "25%" }}
              onClick={handleCheck}
            >
              <Typography style={txtStyle}>Check</Typography>
            </Button> */}
            <Chart />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AttendanceGarbage;

