import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box className="footer-container" sx={{ py: 3 }}>
      <Container>
        <Grid container sx={{ justifyContent: "space-between" }}>
          <Grid item md={6}>
            <Typography variant="h4">Hotel Zone</Typography>
          </Grid>
          <Grid item md={6}>
            <Typography variant="subtitle1">Quick Links</Typography>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
              <li>
                <a href="#">My Bookings</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
