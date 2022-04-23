import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import src from "../../images/contactUs/contact-banner.jpg";

const ContactBanner = () => {
  return (
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
        Contact Us
      </Typography>
    </Box>
  );
};

export default ContactBanner;
