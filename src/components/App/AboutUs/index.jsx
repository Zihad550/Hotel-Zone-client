import {
  faAward,
  faDollar,
  faHeadset,
  faSackDollar,
  faShield,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Banner from "../../components/Banner";
import src from "../../images/aboutUs/aboutUs-banner.jpg";
import Footer from "../Shared/Footer/Footer";
const AboutUs = () => {
  const services = [
    {
      id: 1,
      title: "High Rating",
      about:
        "Whether you want to stay in a chic city apartment, a luxury beach resort, or a cozy B&B in the countryside, Booking.com gives you amazing diversity and variety of choice – all in one place.",
      icon: faAward,
    },
    {
      id: 2,
      title: "Low Rates",
      about:
        "Booking.com guarantees to offer you the best available rates. And with our promise to price match, you can rest assured that you’re always getting a great deal.",
      icon: faDollar,
    },
    {
      id: 3,
      title: "Instant Confirmation",
      about:
        "At Booking.com, every reservation is instantly confirmed. When you find your perfect stay, a few clicks are all it takes.",
      icon: faSquareCheck,
    },
    {
      id: 4,
      title: "No Reservation Fees",
      about:
        "We don’t charge you any booking fees or add any administrative charges. And in many cases, your booking can be canceled free of charge.",
      icon: faSackDollar,
    },
    {
      id: 5,
      title: "Secure Booking",
      about:
        "We facilitate hundreds of thousands of transactions every day through our secure platform and work to the highest standards to guarantee your privacy. For more details, check our Privacy Statement.",
      icon: faShield,
    },
    {
      id: 6,
      title: "24/7 Support",
      about:
        "Whether you’ve just booked or are already enjoying your trip, our Customer Experience Team is available around the clock to answer your questions and advocate on your behalf in more than 40 languages. Make sure to check out our FAQs for travelers.",
      icon: faHeadset,
    },
  ];
  return (
    <div>
      {/* banner */}
      <Banner title="About Us" src={src} />

      {/* body */}
      <Container>
        {/* about */}
        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Typography variant="h4">Since 1996 year</Typography>
          <Typography variant="body1">
            Founded in 1996 in Bangladesh, HotelZone.com has grown from a small
            Bengoli startup to one of the world’s leading digital travel
            companies. Part of Hotel Zone Inc. HotelZone.com’s mission is to
            make it easier for everyone to experience the world.
          </Typography>
        </Box>

        {/* services */}
        <Grid container spacing={2} sx={{ mt: 5 }}>
          {services.map((service) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
              }}
              key={service.id}
            >
              <FontAwesomeIcon
                style={{ fontSize: "3rem", marginBottom: ".2rem" }}
                icon={service.icon}
              />
              <Typography variant="h6">{service.title}</Typography>
              <Typography variant="body2">{service.about}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
