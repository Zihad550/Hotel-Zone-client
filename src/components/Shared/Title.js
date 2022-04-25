import { Typography } from "@mui/material";
import React from "react";

const Title = ({ children }) => {
  return (
    <Typography sx={{ fontFamily: "'Lobster', cursive" }} variant="h1">
      {children}
    </Typography>
  );
};

export default Title;
