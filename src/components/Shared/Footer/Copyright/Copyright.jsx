import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Copyright = () => {
  return (
    <Box sx={{ my: "auto", background: "#F3ECE8", py: 1, textAlign: "center" }}>
      <Typography variant="body2">
        &copy; 2022 Copyright. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Copyright;
