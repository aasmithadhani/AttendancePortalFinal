import React from "react";

import Toolbar from "@mui/material/Toolbar";

import Nav from "../Components/Nav";

import TextField from "@mui/material/TextField";
import swal from "sweetalert";

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
const MAX_COUNT = 5;

const Upload = () => {
    
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
    
  }, []);

  // let itemsSubject = [];
  // for (let index = 0; index < MyDataProfile.subjects?.length; index++) {
  //   itemsSubject.push(
  //     <MenuItem value={MyDataProfile.subjects[index].department?.id}>
  //       {MyDataProfile.subjects[index].department?.name}
  //     </MenuItem>
  //   );
  // }

  let itemsSubject = [];
let uniqueDepartments = [];

for (let index = 0; index < MyDataProfile.subjects?.length; index++) {
  const department = MyDataProfile.subjects[index].department;
  if (department && !uniqueDepartments.includes(department.name)) {
    uniqueDepartments.push(department.name);

    itemsSubject.push(
      <MenuItem value={department.name}>
        {department.name}
      </MenuItem>
    );
  }
}
  const defaultTheme = createTheme();
 
  const [department,setDepartment] = useState("")
  const [uploadedFiles, setUploadedFiles] = useState([])
    const [fileLimit, setFileLimit] = useState(false);


    const handleUploadFiles = files => {
        const uploaded = [...uploadedFiles];
        let limitExceeded = false;
        files.some((file) => {
            if (uploaded.findIndex((f) => f.name === file.name) === -1) {
                uploaded.push(file);
                if (uploaded.length === MAX_COUNT) setFileLimit(true);
                if (uploaded.length > MAX_COUNT) {
                    alert(`You can only add a maximum of ${MAX_COUNT} files`);
                    setFileLimit(false);
                    limitExceeded = true;
                    return true;
                }
            }
        })
        if (!limitExceeded) 
        
          setUploadedFiles(uploaded)


        

    }

    const handleFileEvent =  (e) => {
      const chosenFiles = Array.prototype.slice.call(e.target.files)
      handleUploadFiles(chosenFiles);
  }

  const handleDeleteFile = (fileName) => {
    const updatedFiles = uploadedFiles.filter((file) => file.name !== fileName);
    setUploadedFiles(updatedFiles);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    uploadedFiles.forEach((file,index) => {
      formData.append(`files[${index}]`, file);
      console.log(file)
    });
  
    // Append the selected department to formData
    formData.append("department", department);
    // formData.append("message","hello")

    console.log("form data: ",formData)

    const formDataObject = {};
  for (const [key, value] of formData.entries()) {
    formDataObject[key] = value;
  }

  // Log the formatted object
  console.log("formDataObject:", formDataObject);
  
    // try {
    //   const response = await axios.post(
    //     "https://b608-115-98-232-215.ngrok-free.app/attendance/attenFile/", // Replace with your API endpoint
    //     formData,
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   );
  
    //   console.log("Files uploaded:", response.data);
  
    //   // Handle API response here
    // } catch (error) {
    //   console.error("Error uploading files:", error);
    //   // Handle error here
    // }

    
      let config = {
        method: "POST",
        maxBodyLength: Infinity,
        url: "https://attendanceportal.pythonanywhere.com/attendance/attenFile/", data:formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      axios
        .request(config)
        .then((response) => {
          console.log(response.data);
          console.log("success")
          swal({
            title: "Files uploaded!",
            // text: response.data.message,
            icon: "success",
            button: "ok",
          });
          // SetMyDataProfile(response.data);
        })
        .catch((error) => {
          console.log(error);
          swal({
            title: "Oops!",
            text: "Some error occured",
            icon: "error",
            button: "ok",
          });
        });
      // console.log(MyDataProfile);
      
    



  };

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
                Upload
              </Typography>
            </Grid>
           

            <Grid item xs={12} lg={12} md={12}>
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                }}
              >
                Select Department:
              </Typography>

              <FormControl>
                <InputLabel>Department</InputLabel>
                <Select
                  className="subject"
                  labelId="From-id"
                  value={department}
                  label="subject"
                  onChange={(event) => setDepartment(event.target.value)}
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

            <Grid item xs={12} lg={12} md={12} sx={{mt:3}}>
             

              <label htmlFor='fileUpload' style={{
                marginRight:20
              }}>
                <a  className={`btn btn-primary ${!fileLimit ? '' : 'disabled' } `}>Upload Files</a>
              </label>
              
              <div>
                  <input type="file" onChange={handleFileEvent} />
                  {uploadedFiles.map((file, index) => (
                    <div key={index}>
                      <span>{file.name}</span>
                      <button onClick={() => handleDeleteFile(file.name)}>Delete</button>
                    </div>
                  ))}
                  {/* {fileLimit && <p>File limit exceeded</p>} */}
                </div>

             
            </Grid>

            <Grid item lg={3} xs={10}>
              <Button
                className="LoginBtn"
                // type="submit"
                onClick={handleUpload}
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
                  Upload
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  )
}

export default Upload;