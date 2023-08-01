import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Button from "@mui/material/Button";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { styled, alpha } from "@mui/material/styles";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Grid } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';

import "./Nav.css";

import x from "../images/djLogo.PNG";

import Modal from "@mui/material/Modal";

import Modall from "./Modal";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/app-context";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const drawerWidth = 120;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.45),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1.5, 1.5, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "128rem",
    border: "1.7px solid rgb(191, 189, 189)",
    borderRadius: "8px",
    [theme.breakpoints.up("sm")]: {
      width: "40ch",
      "&:focus": {
        width: "170ch",
      },
    },
  },
}));

const txtStyle = {
  //  fontFamily: 'Montserrat',
  fontFamily: "sans-serif",
  fontStyle: "normal",
  fontWeight: 650,
  fontSize: "18px",
  lineHeight: "25px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
};

const Nav = (props) => {
  const { MyDataProfile, SetMyDataProfile } = useApp();

  const [alignment, setAlignment] = React.useState("Upcoming");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate();

  //use context
  const { setSearch, setAll, all } = useApp();

  const drawer = (
    <div>
      <Toolbar />
      <List sx={{ mb: "5em" }}>
        <ListItem>
          <img
            src={x}
            style={{
              width: "5em",
              objectFit: "cover",
              borderRadius: "60px",
              padding: "1rem",
              boxSizing: "border-box",
            }}
          ></img>
        </ListItem>
        {/* <Link to="/"> */}
        <ListItem
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          onClick={() => {
            navigate("/teacher");
          }}
        >
          <ListItemButton>
            <HomeOutlinedIcon fontSize="large" />
          </ListItemButton>
          <ListItemText>Home</ListItemText>
        </ListItem>
        {/* </Link> */}

        <ListItem
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          onClick={() => {
            navigate("/download");
          }}
        >
          <ListItemButton>
            <DownloadOutlinedIcon fontSize="large"/>
          </ListItemButton>
          <ListItemText>Download</ListItemText>
        </ListItem>

        <ListItem
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          onClick={() => {
            navigate("/profile");
          }}
        >
          <ListItemButton>
            <PermIdentityOutlinedIcon fontSize="large" />
          </ListItemButton>
          <ListItemText>Profile</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List sx={{ mt: "2em" }}>
        <ListItem
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          onClick={() => {
            navigate("/");
            localStorage.removeItem("key1"); //
            localStorage.clear();
          }}
        >
          <ListItemButton>
            <LogoutOutlinedIcon fontSize="large" />
          </ListItemButton>
          <ListItemText>Logout</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeSearch = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
    // console.log(search);
    // setSearch.(search);
  };
  const handleChangeAll = (event) => {
    // setAll(true);
    // console.log(all);
    console.log(event.detail);
  };

  // const handlechangeAllDouble = (event) => {
  //   console.log("double click");
  // };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          // width:  "85rem" ,

          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "white",
          boxShadow: "none",
          color: "black",
          // backgroundColor: 'black',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Grid item xs={12}>
            <Grid item>
              <List
                sx={{
                  color: "black",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Box sx={{ display: "flex", flexBasis: "30%" }}>
                  <ListItem
                    className="NavList"
                    sx={{
                      // marginLeft: "5px",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Search>
                      <SearchIconWrapper>
                        <SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                        className="SearchBar"
                        placeholder="Search Batch"
                        variant="outlined"
                        inputProps={{ "aria-label": "search" }}
                        sx={{
                          width: "10em",
                        }}
                        // onChange={(e)=> setSearch(e.target.value)}
                        onChange={handleChangeSearch}
                      />
                    </Search>
                  </ListItem>
                  {/* <ListItem className="Filter">
                    <ListItemButton
                      sx={{
                        border: "1.7px solid rgb(191, 189, 189)",
                        borderRadius: "8px",
                        paddingLeft: "12px",
                        paddingRight: "12px",
                        marginLeft: "15px",
                        pt: "12px",
                        pb: "12px",
                      }}
                      onClick={handleChangeAll}
                      value={true}
                    >
                      <FilterAltIcon />
                    </ListItemButton>
                  </ListItem> */}
                </Box>
                <Box sx={{ display: "flex", flexBasis: "50%" }}>
                  <ListItem className="header">
                    <Typography>{MyDataProfile?.user?.first_name}</Typography>
                    <img
                      src={x}
                      style={{
                        width: "5em",
                        objectFit: "cover",
                        borderRadius: "60px",
                        padding: "1rem",
                        boxSizing: "border-box",
                      }}
                    ></img>
                  </ListItem>
                </Box>
              </List>
            </Grid>

            <Grid item className="add">
              <List
                sx={{ color: "black", display: "flex", flexDirection: "row" }}
              >
                {/* <ListItem className='upcoming'>
                <ListItemButton sx={{backgroundColor:'blue', borderRadius:'0.5em', color:'white',textAlign:'center', height:'3em'}} >Upcoming</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton sx={{
                  boxShadow: 2,
                  borderRadius:'0.5em',
                  height:'3em'
                }}>Completed</ListItemButton>
              </ListItem> */}
                <ToggleButtonGroup
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChange}
                  aria-label="Platform"
                  top="40px;"
                >
                  <ToggleButton value="Upcoming" className="button">
                    Upcoming
                  </ToggleButton>

                  <ToggleButton value="Completed" className="button">
                    Completed
                  </ToggleButton>
                </ToggleButtonGroup>

                <List sx={{ ml: "100%" }}>
                  <ListItemButton
                    onClick={handleOpen}
                    sx={{
                      boxShadow: 2,
                      borderRadius: "0.5em",
                    }}
                  >
                    <AddOutlinedIcon fontSize="large" />
                  </ListItemButton>

                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Modall />
                  </Modal>
                </List>
              </List>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Nav;
