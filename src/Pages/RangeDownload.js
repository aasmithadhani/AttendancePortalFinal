import React from "react";
import Nav from "../Components/Nav";
import {
  Box,
  CardActions,
  CardContent,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

function RangeDownload() {
  return (
    <Box sx={{ display: "flex" }}>
      <Nav />
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
        }}
      >
        <Toolbar />
        <Box>
          <Paper>
            <form>
              <Box></Box>
              <TextField>1</TextField>
              <TextField>2</TextField>
              <TextField>3</TextField>
            </form>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default RangeDownload;
