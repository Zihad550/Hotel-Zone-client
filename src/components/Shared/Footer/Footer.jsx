import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import { Container, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import partner1 from "assets/images/partners/1.png";
import partner2 from "assets/images/partners/2.png";
// import partner3 from "../../../images/partners/3.png";
import payment1 from "assets/images/payments/american-express.png";
import payment2 from "assets/images/payments/money.png";
import payment3 from "assets/images/payments/paypal1.png";
import payment4 from "assets/images/payments/visa.png";
import React from "react";
import Copyright from "./Copyright";
import Newsletter from "./Newsletter";

const Footer = () => {
  const partners = [
    { id: 1, src: partner1 },
    { id: 2, src: partner2 },
  ];

  const contactTypes = ["Address", "Phone", "App", "Email"];

  const contactInfos = [
    "Dhaka, Bangladesh",
    "+88 01234567891",
    "WhatsApp",
    "jehadhossain008@gmail.com",
  ];

  const payments = [
    {
      id: 1,
      src: payment1,
    },
    {
      id: 2,
      src: payment2,
    },
    {
      id: 3,
      src: payment3,
    },
    {
      id: 4,
      src: payment4,
    },
  ];

  const socials = [
    {
      id: 1,
      icon: <LinkedInIcon />,
    },
    {
      id: 2,
      icon: <FacebookIcon />,
    },
    {
      id: 3,
      icon: <LogoDevIcon />,
    },
  ];
  return (
    <Box sx={{ mt: 15 }}>
      {/* newsletter section */}
      <Newsletter />

      {/* footer */}
      <Container className="footer-container" sx={{ py: 3 }}>
        <Grid
          container
          sx={{
            pl: 5,
          }}
          spacing={2}
        >
          <Grid item xxl={4} lg={3} md={6} xs={12}>
            <Typography sx={{ fontFamily: "'Lora', serif" }} variant="h6">
              About
            </Typography>
            <Typography sx={{ width: "80%", my: 2 }} color="" variant="body1">
              Welcome to Hotel Zone, where comfort is everything. Beautiful room
              presentations, straightforward booking & reservation options, & a
              whole lot more awaits here.
            </Typography>
            <Box sx={{ display: "flex", height: "5rem" }}>
              {partners.map((partner) => (
                <img key={partner.id} src={partner.src} alt="" />
              ))}
            </Box>
          </Grid>
          <Grid
            item
            xxl={2}
            lg={3}
            md={6}
            xs={12}
            sx={{ mt: { xs: 5, md: 0 } }}
          >
            <Typography
              sx={{ fontFamily: "'Lora', serif", mb: 2 }}
              variant="h6"
            >
              Contact
            </Typography>

            {/* contact  */}
            <Grid container spacing={1}>
              <Grid item>
                {contactTypes.map((type) => (
                  <Typography key={type} variant="body1">
                    {type}:
                  </Typography>
                ))}
              </Grid>
              <Grid item>
                {contactInfos.map((info) => (
                  <Typography key={info} variant="body1">
                    {info}
                  </Typography>
                ))}
              </Grid>
            </Grid>
          </Grid>
          {/* contact */}
          {/* payment */}
          <Grid item lg={3} md={6} xs={12} sx={{ mt: { md: 5, lg: 0, xs: 5 } }}>
            <Typography sx={{ fontFamily: "'Lora', serif" }} variant="h6">
              Payment
            </Typography>
            <Typography sx={{ width: "80%", my: 2 }} variant="body1">
              Pay any way you choose, we support all payment options.
            </Typography>
            <Box sx={{ display: "flex" }}>
              {payments.map((payment) => (
                <Box sx={{ pr: 1 }} key={payment.id}>
                  <img src={payment.src} alt="" />
                </Box>
              ))}
            </Box>
          </Grid>
          {/* payment */}
          {/* social */}
          <Grid item lg={3} md={6} xs={12} sx={{ mt: { md: 5, lg: 0, xs: 5 } }}>
            <Typography sx={{ fontFamily: "'Lora', serif" }} variant="h6">
              Get Social
            </Typography>
            <Typography sx={{ width: "80%", my: 2 }} variant="body1">
              Follow us on social media and keep in touch with Alloggio.
            </Typography>
            {socials.map((social) => (
              <IconButton key={social.id}>{social.icon}</IconButton>
            ))}
          </Grid>
          {/* social */}
        </Grid>
      </Container>

      {/* copyright section */}
      <Copyright />
    </Box>
  );
};

export default Footer;
