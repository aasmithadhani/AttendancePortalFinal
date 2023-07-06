import React from 'react'
import { Typography, Modal,Box, ToggleButtonGroup, ToggleButton } from '@mui/material';







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
  

const Modall = () => {

    const [alignment, setAlignment] = React.useState('batch');

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
  return (
    <Box sx={style}>
           <ToggleButtonGroup
           color="primary"
           value={alignment}
           exclusive
           onChange={handleChange}
           aria-label="Platform">
            <ToggleButton value='batch' >
                new Batch
            </ToggleButton>
            <ToggleButton value='lecture'>
                new lecture
            </ToggleButton>
           </ToggleButtonGroup>
           
           
           
    </Box>
  )
}

export default Modall