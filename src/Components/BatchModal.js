import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useApp } from "../context/app-context";
import "../Pages/Class.css";

function BatchModal() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: "35rem", value given in class.css
    // height: "50%",
    bgcolor: "white",
    // border: "2px solid #000",
    boxShadow: 24,
    display: "flex",
    flexDirection: "column",
    background: "#FFFFFF",
    borderRadius: "10px",
  };
  const { selectedLecture, data, BatchData, SetBatchData, MyDataNew } =
    useApp();
  //-----------------------Reload-------------------------

  let MyDataNewTemp = 0;

  if (MyDataNew.length == 0) {
    MyDataNewTemp = JSON.parse(localStorage.getItem("MyDataNewLocal"));
  } else {
    MyDataNewTemp = MyDataNew;
  }
  useEffect(() => {
    return () => {
      console.log(MyDataNewTemp, "MydataNEw");
    };
  }, []);
  //-----------------------Reload-------------------------
  // console.log(BatchData.id);
  // console.log(MyDataNew);
  const BatchDataTeacher = MyDataNewTemp.find(
    (element) => element.id === BatchData.id
  );
  // const BatchDataTeacher = BatchData;

  // useEffect(() => {
  //   return () => {
  //     console.log(BatchData);
  //     console.log(BatchDataTeacher.department);
  //   };
  // }, []);

  // console.log(BatchDataTeacher.department);

  return (
    <>
      <Box style={style} className="BatchModalBox">
        {/* <Box sx={{ width: "25px" }} className="BatchModalBox"> */}
        <Box sx={{ padding: "20px" }}>
          <Box align="center" sx={{ padding: "10px" }}>
            BatchModal
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 270 }} aria-label="simple table">
              {/* <TableHead>
              <TableRow>
              <TableCell align="right">Batch Data</TableCell>
              </TableRow>
            </TableHead> */}
              <TableBody>
                {/* {BatchData.map((row) => ( */}

                <TableRow
                  key={1}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Class Teacher
                  </TableCell>
                  <TableCell align="right">
                    {BatchDataTeacher.class_teacher}
                  </TableCell>
                </TableRow>

                <TableRow
                  key={2}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Department
                  </TableCell>
                  <TableCell align="right">
                    {BatchDataTeacher.department}
                  </TableCell>
                </TableRow>

                <TableRow
                  key={3}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Id
                  </TableCell>
                  <TableCell align="right">{BatchDataTeacher.id}</TableCell>
                </TableRow>

                <TableRow
                  key={4}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Name
                  </TableCell>
                  <TableCell align="right">{BatchDataTeacher.name}</TableCell>
                </TableRow>

                <TableRow
                  key={5}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Number of students
                  </TableCell>
                  <TableCell align="right">
                    {BatchDataTeacher.number_of_students}
                  </TableCell>
                </TableRow>

                <TableRow
                  key={6}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Semester
                  </TableCell>
                  <TableCell align="right">
                    {BatchDataTeacher.semester}
                  </TableCell>
                </TableRow>

                <TableRow
                  key={7}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Year
                  </TableCell>
                  <TableCell align="right">{BatchDataTeacher.year}</TableCell>
                </TableRow>

                {/* ))} */}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}

export default BatchModal;
