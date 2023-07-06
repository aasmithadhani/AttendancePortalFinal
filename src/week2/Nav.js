import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';


import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { styled, alpha } from '@mui/material/styles';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import InputBase from '@mui/material/InputBase';


import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';


import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Grid } from '@mui/material';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import './Nav.css'

import x from '../images/djLogo.PNG';


import Modal from '@mui/material/Modal';

import Modall from './Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const drawerWidth = 120;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

 const Nav = (props) => {


  const [alignment, setAlignment] = React.useState('Upcoming');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

    // const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
          <Toolbar />
      <List sx={{mb:'5em'}}>
        <ListItem>
         <img
                    src={x}
                    style={{
                      width:'5em',
                      objectFit: "cover",
                      borderRadius: "60px",
                      padding: "1rem",
                      boxSizing: "border-box",
                     
                    }}
                  ></img>
         </ListItem>
        <ListItem style={{
          display:'flex',
          flexDirection:'column'
         }}>
          
          <ListItemButton>
            <HomeOutlinedIcon fontSize="large"/> 
                  
          </ListItemButton>
          <ListItemText>
            Home
          </ListItemText>
        </ListItem>

        <ListItem style={{
          display:'flex',
          flexDirection:'column'
         }}>
          
          <ListItemButton>
            <DateRangeOutlinedIcon fontSize='large'/>
                  
          </ListItemButton>
          <ListItemText>
            Calender
          </ListItemText>
        </ListItem>

        <ListItem style={{
          display:'flex',
          flexDirection:'column'
         }}>
          
          <ListItemButton>
            <PermIdentityOutlinedIcon fontSize='large'/>
                  
          </ListItemButton>
          <ListItemText>
           Profile
          </ListItemText>
        </ListItem>


          </List>
          <Divider />
          <List sx={{mt:'2em'}}>
          <ListItem style={{
          display:'flex',
          flexDirection:'column'
         }}>
          
          <ListItemButton>
            <LogoutOutlinedIcon fontSize='large'/>
                  
          </ListItemButton>
          <ListItemText>
          Logout
          </ListItemText>
        </ListItem>

          </List>
        </div>
      );


      const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

      
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor:'white',
          boxShadow:'none',
          color:'black',
          // backgroundColor: 'black',
          
          
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Grid xs={12} >
          <Grid item >
          <List sx={{color:'black', display:'flex', flexDirection:'row'}}>
            <ListItem >
              <Search >
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search Batch"
                  inputProps={{ 'aria-label': 'search' }}
                  sx={{
                    width:'10em'
                  }}
                  
                />

              </Search>
         
            </ListItem>

            <ListItem>
               <ListItemButton>
                <FilterAltIcon/>
               </ListItemButton>
            </ListItem>

            <ListItem className='header'>
              <Typography>
                Name
              </Typography>
              <img
                    src={x}
                    style={{
                      width:'5em',
                      objectFit: "cover",
                      borderRadius: "60px",
                      padding: "1rem",
                      boxSizing: "border-box",
                     
                    }}
                  ></img>

            </ListItem>
          </List>

         
          </Grid >

          <Grid item className='add'>
            <List sx={{color:'black', display:'flex', flexDirection:'row'}}>
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
              >
                <ToggleButton value="Upcoming" className='button'>Upcoming</ToggleButton>
                
                <ToggleButton value="Completed" className='button'>Completed</ToggleButton>
              </ToggleButtonGroup>

              <List sx={{ml:'100%'}}>
                <ListItemButton onClick={handleOpen} sx={{
                  boxShadow:2,
                  borderRadius:'0.5em'
                }}>
                <AddOutlinedIcon fontSize='large'/>
                </ListItemButton>

                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                  <Modall/>
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
     
    </Box>
  )
}


export default Nav;