import {
  faCalendarDays,
  faCalendarXmark,
  faComments,
  faMoneyBills,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import src from "../../../images/contactUs/contact-banner.jpg";
import Banner from "../../Shared/Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import { btn } from "./contact.style.module.css";
import ContactAccordion from "./ContactAccordion";
const ContactUs = () => {
  // handlers
  const handleContactUs = (e) => {
    e.preventDefault();
  };

  const inputs = [
    { id: 1, name: "name", label: "Name", type: "text" },
    { id: 2, name: "email", label: "E-mail", type: "email" },
  ];

  const contactActions = [
    { id: 1, name: "Cancel your trip", icon: faCalendarXmark },
    { id: 2, name: "Change your trip", icon: faCalendarDays },
    { id: 3, name: "Ask about a refund", icon: faMoneyBills },
    { id: 4, name: "Chat Now", icon: faComments },
  ];
  return (
    <>
      {/* banner */}
      <Banner src={src} title="Contact Us" />

      {/* body */}
      <Container sx={{ my: 10 }}>
        {/* contact actions */}
        <Box sx={{ mb: 2 }}>
          {contactActions.map((action) => (
            <button className={btn} key={action.id}>
              {action.name}
              <FontAwesomeIcon icon={action.icon} />
            </button>
          ))}
        </Box>

        {/* contact form & common questions */}
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Typography variant="body2">
              Founded in 1996 in Bangladesh, HotelZone.com has grown from a
              small Bengoli startup to one of the world’s leading digital travel
              companies. Part of Hotel Zone Inc. HotelZone.com’s mission is to
              make it easier for everyone to experience the world.
            </Typography>
            {/* contact form */}
            <h4>Write Us</h4>
            <form
              className="responsive-form"
              style={{ width: "100%" }}
              onSubmit={handleContactUs}
            >
              {inputs.map((input) => (
                <TextField
                  fullWidth
                  required
                  margin="dense"
                  label={input.label}
                  key={input.id}
                />
              ))}

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
          <Grid item md={6} xs={12}>
            <Typography variang="h4" gutterBottom>
              Frequently Asked Questions
            </Typography>
            <Typography sx={{ mb: 2 }} color="text" variant="body2">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Fusce sodales, sapien ut
              venenatis scelerisque, nulla dui consectetur nisi, at auctor purus
              orci aliquam turpis. Nulla ac sagittis massa, a consequat ex.
              Morbi vestibulum mi fringilla sodales tincidunt. Aenean rutrum.
            </Typography>
            <ContactAccordion />
          </Grid>
        </Grid>
      </Container>

      {/* footer */}
      <Footer />
    </>
  );
};

export default ContactUs;
