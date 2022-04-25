import { Box } from '@mui/system';
import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <Box sx={{display: 'flex', width: '100vw', height: '80vh', alignItems:'center', justifyContent: 'center'}}>
     <div className="loader" />
    </Box>
  )
}

export default Spinner;