import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TextField } from "@mui/material";
import './DummyNew.css';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "20px",
  transform: "translate(-50%, -50%)",
  //   width: 600,
  bgcolor: "background.paper",
  p: 4,
    width: '32rem',
  // height: '480px'
};
const txtStyle = {
  //  fontFamily: 'Montserrat',
  fontFamily: "sans-serif",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "35px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
};
const BoxStyle={
    marginTop:'1rem'
}

function DummyNew() {

  const [batch, setBatch] = React.useState("");
  const [time1, setTime1] = React.useState("");
  const [time2, setTime2] = React.useState("");
  const [freq, setFreq] = React.useState("");


  const handleChange = (event) => {
    setBatch(event.target.value);
  };
  const handleChange1 = (event) => {
    setTime1(event.target.value);
  };
  const handleChange2 = (event) => {
    setTime2(event.target.value);
  };
  const handleChange3 = (event) => {
    setFreq(event.target.value);
  };

  return (
    <>
      <div>
          <Box  id="Box" sx={style}>
            <Box sx={{display:"flex",flexDirection: "row",justifyContent:'space-between'}}
            style={BoxStyle}>
              <Button
              id="Lec"
                sx={{
                  width: "13.562rem",
                  height: "50px",
                  background: " #0056D2",
                  borderRadius: " 10px",
                //   marginRight: "10px",
                }}
              >
                <Typography style={txtStyle} sx={{ color: "#FEF6F6" }} className="Nlec">
                  {" "}
                  New Lecture
                </Typography>
              </Button>
              <Button
              id="Batch"
                sx={{
                  width: "13.562rem",
                  height: "50px",
                  background: "#FFFFFF",
                  borderRadius: " 10px",
                  border: "2px solid #DEDEDE",
                //   marginLeft: "10px",
                }}
              >
                <Typography style={txtStyle} sx={{ color: "#121212" }} className="NBatch">
                  {" "}
                  New Batch
                </Typography>
              </Button>
            </Box>
            <Box style={BoxStyle}>Calendar</Box>
            <Box style={BoxStyle}>
              <Box sx={{ minWidth: 120 }} >
                <FormControl fullWidth>
                  <InputLabel id="Batch-id">Batch</InputLabel>
                  <Select
                    labelId="Batch-id"
                    id="Batch-id"
                    value={batch}
                    label="Batch"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Comps</MenuItem>
                    <MenuItem value={20}>IT</MenuItem>
                    <MenuItem value={30}>DS</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              {/* <Box sx={{  display:'flex' ,justifyContent:'space-between'}}> */}
              <Box sx={{margin:'0',marginTop:'10px', 
                marginBottom:'10px',display:'flex',flexDirection:'row',
                justifyContent:'space-between'}} style={BoxStyle}>

                <FormControl sx={{ m: 1, minWidth: 120,margin:'0'}} size="small" className="From">
                    
                  <InputLabel id="From-id">From</InputLabel>
                  <Select
                  className="From"
                    labelId="From-id"
                    id="FromId"
                    value={time1}
                    label="From"
                    onChange={handleChange1}
                    sx={{
                      width: "13.562rem",
                      height: "50px",
                      background: "#FFFFFF",
                      borderRadius: " 10px",
                      // border: "2px solid #DEDEDE",
                     
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={700}>7:00 am</MenuItem>
                    <MenuItem value={730}>7:30 am</MenuItem>
                    <MenuItem value={800}>8:00 am</MenuItem>
                    <MenuItem value={830}>8:30 am</MenuItem>
                    <MenuItem value={900}>9:00 am</MenuItem>
                    <MenuItem value={930}>9:30 am</MenuItem>
                    <MenuItem value={1000}>10:00 am</MenuItem>
                    <MenuItem value={1030}>10:30 am</MenuItem>
                    <MenuItem value={1100}>11:00 am</MenuItem>
                    <MenuItem value={1130}>11:30 am</MenuItem>
                    <MenuItem value={1200}>12:00 pm</MenuItem>
                    <MenuItem value={1230}>12:30 pm</MenuItem>
                    <MenuItem value={1300}>1:00 pm</MenuItem>
                    <MenuItem value={1330}>1:30 pm</MenuItem>
                    <MenuItem value={1400}>2:00 pm</MenuItem>
                    <MenuItem value={1430}>2:30 pm</MenuItem>
                    <MenuItem value={1500}>3:00 pm</MenuItem>
                    <MenuItem value={1530}>3:30 pm</MenuItem>
                    <MenuItem value={1600}>4:00 pm</MenuItem>
                    <MenuItem value={1630}>4:30 pm</MenuItem>
                    <MenuItem value={1700}>5:00 pm</MenuItem>
                    <MenuItem value={1730}>5:30 pm</MenuItem>
                    <MenuItem value={1800}>6:00 pm</MenuItem>
                  </Select>
                 
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120,margin:'0'}} size="small">
              
                  <InputLabel id="To-id">To</InputLabel>
                  <Select
                  className="To"
                    labelId="To-id"
                    id="ToId"
                    value={time2}
                    label="To"
                    onChange={handleChange2}
                    sx={{
                      width: "13.562rem",
                      height: "50px",
                      background: "#FFFFFF",
                      borderRadius: " 10px",
                      // border: "2px solid #DEDEDE",
                     
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={700}>7:00 am</MenuItem>
                    <MenuItem value={730}>7:30 am</MenuItem>
                    <MenuItem value={800}>8:00 am</MenuItem>
                    <MenuItem value={830}>8:30 am</MenuItem>
                    <MenuItem value={900}>9:00 am</MenuItem>
                    <MenuItem value={930}>9:30 am</MenuItem>
                    <MenuItem value={1000}>10:00 am</MenuItem>
                    <MenuItem value={1030}>10:30 am</MenuItem>
                    <MenuItem value={1100}>11:00 am</MenuItem>
                    <MenuItem value={1130}>11:30 am</MenuItem>
                    <MenuItem value={1200}>12:00 pm</MenuItem>
                    <MenuItem value={1230}>12:30 pm</MenuItem>
                    <MenuItem value={1300}>1:00 pm</MenuItem>
                    <MenuItem value={1330}>1:30 pm</MenuItem>
                    <MenuItem value={1400}>2:00 pm</MenuItem>
                    <MenuItem value={1430}>2:30 pm</MenuItem>
                    <MenuItem value={1500}>3:00 pm</MenuItem>
                    <MenuItem value={1530}>3:30 pm</MenuItem>
                    <MenuItem value={1600}>4:00 pm</MenuItem>
                    <MenuItem value={1630}>4:30 pm</MenuItem>
                    <MenuItem value={1700}>5:00 pm</MenuItem>
                    <MenuItem value={1730}>5:30 pm</MenuItem>
                    <MenuItem value={1800}>6:00 pm</MenuItem>
                    <MenuItem value={1830}>6:30 pm</MenuItem>
                    <MenuItem value={1900}>7:00 pm</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box style={BoxStyle}>
              <FormControl sx={{ m: 1, minWidth: 120,margin:'0'}} size="small">
              <InputLabel id="freq-id">Frequency</InputLabel>
              <Select
              className="Freq"
                labelId="freq-id"
                id="freqId"
                value={freq}
                label="To"
                onChange={handleChange3}
                sx={{
                  width: "27.9rem",
                  height: "60px",
                  background: "#FFFFFF",
                  borderRadius: " 10px",
                  // border: "2px solid #DEDEDE",
                 
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>1 Lecture</MenuItem>
                <MenuItem value={20}>2 Lectures</MenuItem>
                <MenuItem value={30}>3 Lectures</MenuItem>
              </Select>
            </FormControl>
              </Box>
              <Box style={BoxStyle}>
                <Button
                id="Create"
                sx={{
                    width: "27.9rem",
                    height: "60px",
                    background: " #0056D2",
                    borderRadius: " 10px",
                    marginTop: "10px",
                  }}
                >
                 <Typography style={txtStyle} sx={{color:"#FFFFFF"}}>Create Lecture</Typography>
                </Button>
              </Box>
            </Box>
          </Box>
      </div>
    </>
  );
}

export default DummyNew;
