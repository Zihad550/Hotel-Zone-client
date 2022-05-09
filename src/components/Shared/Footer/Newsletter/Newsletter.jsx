import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Newsletter = () => (
  <Box sx={{ background: "#F1EEE3", py: 5 }}>
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column", sm: "row" },
        textAlign: "center",
      }}
    >
      <MailOutlineIcon sx={{ fontSize: 50, mr: 1 }} />
      <Typography sx={{ my: { xs: 2, sm: 0 } }} variant="h4">
        Join our weekly Newsletter
      </Typography>
      <TextField sx={{ ml: 2 }} label="Email Address" />
      <Button size="large" sx={{ py: 1.7 }} variant="outlined">
        Sign Me Up
      </Button>
    </Container>
  </Box>
);

export default Newsletter;
