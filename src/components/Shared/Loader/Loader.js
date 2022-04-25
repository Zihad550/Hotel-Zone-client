import { Box } from '@mui/system';
import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <Box sx={{display: 'flex', width: '100vw', height: '80vh', alignItems:'center', justifyContent: 'center'}}>
     <div className="loader" />
    </Box>
  )
}

export default Loader;