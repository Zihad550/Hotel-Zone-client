import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Banner = ({ src, title }) => (
  <Box
    sx={{
      height: "200px",
      background: `url(${src}) no-repeat center`,
      backgroundSize: "cover",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Typography sx={{ fontSize: { md: 60, xs: 35 } }} variant="h2">
      {title}
    </Typography>
  </Box>
);

export default Banner;
