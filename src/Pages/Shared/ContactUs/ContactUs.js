import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import contact_img from "../../../images/contact-us.svg";

const ContactUs = () => {
  // handlers
  const handleContactUs = (e) => {
    e.preventDefault();
  };
  return (
    <Container sx={{ my: 10 }}>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "medium",
          fontSize: { md: 60, xs: 35 },
        }}
        variant="h2"
      >
        Contact Us
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <img src={contact_img} alt="" />
        </Grid>
        <Grid
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
          item
          md={6}
          xs={12}
        >
          <form
            className="responsive-form"
            style={{ width: "100%" }}
            onSubmit={handleContactUs}
          >
            <TextField fullWidth required label="Name" />
            <TextField
              fullWidth
              required
              label="E-mail"
              type="email"
              margin="dense"
            />
            <TextField
              fullWidth
              multiline
              rows={5}
              label="Message"
              margin="dense"
            />
            <Button
              size="large"
              sx={{ mt: 1 }}
              variant="contained"
              color="secondary"
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
