import React from 'react'
import Nav from '../Components/Nav'
import Calendar from 'react-calendar';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Toolbar from '@mui/material/Toolbar';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import { Typography,
Button, 
Modal} from '@mui/material';
import Box from '@mui/material/Box';
// import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AddIcon from '@mui/icons-material/Add';

import './Teacher.css'

// import DummyNew from './DummyNew';
import DummyNew from '../Components/DummyNew';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ListItemButton from '@mui/material/ListItemButton';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LatestModal from '../Components/LatestModal';


const drawerWidth=120

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
const Teacher = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const [alignment, setAlignment] = React.useState('Upcoming');
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  return (
    // <Box 
    // component="main"
    // sx={{ flexGrow: 1, pl: '10%',pr:'10%', width: '100%'}}>
    <Box sx={{display:'flex'}}>

                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                  {/* <DummyNew/> */}
                  <LatestModal/>
                </Modal>

 <Nav/>
 <Box
    component="main"
    className="card"
    sx={{ flexGrow: 1,mt:0, width:"20rem",padding :"15px",position: "relative",top:"40px",
    marginLeft: "35px",marginRight: "60px" }}
  >
    <Toolbar />
    <Box sx={{display:"flex", flexDirection:"row",flex:'1'}}>
          <Box>
              <ToggleButtonGroup
                color="primary"
                // class="btn btn-primary btn-lg active"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                sx={{top:"60",marginBottom:"27px",color:"#0056D2"}}
              >
                <ToggleButton value="Upcoming" className='button'>Upcoming</ToggleButton>
                
                <ToggleButton value="Completed" className='button'>Completed</ToggleButton>
              </ToggleButtonGroup>
          </Box>
          {/* <Box sx={{alignItems: "center",justifyContent:"center",margin:"0.6rem"}}>
            <Button onClick={handleOpen}>
            <AddIcon></AddIcon>
            </Button>
          </Box> */}
          <Box>
          <ListItemButton onClick={handleOpen} sx={{
                  boxShadow:2,
                  borderRadius:'0.5em',
                  // justifyContent:"right"
                }}>
                <AddOutlinedIcon fontSize='large'/>
                </ListItemButton>
          </Box>
      </Box>
    <div style={{
        display:'flex',
        flexDirection:'row',
        marginBottom:"20px"
    }}>
        <Typography className='date' style={txtStyle} sx={{  fontWeight: 700,color:"#0056D2"}}>
            {date}  
        </Typography>
        <Typography className='date' style={txtStyle} sx={{  fontWeight: 100,color:"#0056d2cf"}}>
        &nbsp;  Today
        </Typography>
        {/* <Calendar/>*/}
    </div>
       
        {/* <Paper elevation={1}> */}
        {/* <Link to="/class"> */}
      <Card sx={{ maxWidth: '100%' , display:'flex',position:'relative', flexDirection:'row',
    justifyContent:"space-between",variant:"outlined",borderRadius:"10px",border: "2px solid #DEDEDE",
    boxShadow:"none"}} onClick={()=>{navigate('/class')}} className="Card">
     
      <CardContent>
        <Box>
        <Typography gutterBottom variant="h5" component="div" style={txtStyle} sx={{  fontWeight: 450}}
         className="Heading">
          SE-COMPUTER ENGINEERING-A3
        </Typography>
        </Box>
        <Box sx={{display:"flex",flexDirection:"row"}} className="Detail">
        <Typography variant="body2" color="#000000ab" fontSize={"17px"} marginRight={"10px"}>
         12:30-2:30
        </Typography>
        <Typography variant="body2" color="#000000ab" fontSize={"17px"}>
         Computer Networks
        </Typography></Box>
      </CardContent>
      <CardActions sx={{float:'right'}}>
        <Button size="40rem"><CancelIcon fontSize='large' color='blue' variant="filled"/></Button> 
      </CardActions>
    </Card>
    {/* </Link> */}
      {/* </Paper> */}
    </Box>
    </Box>
   
  )
}


export default Teacher