import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Spinner = () => {
  return (
    <Box sx={{display: 'flex', width: '100vw', height: '80vh', alignItems:'center', justifyContent: 'center'}}>
      <CircularProgress/>
    </Box>
  )
}

export default Spinner;