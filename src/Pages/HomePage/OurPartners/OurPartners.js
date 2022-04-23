import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import src1 from "../../../images/partners/1.png";
import src2 from "../../../images/partners/2.png";
import src3 from "../../../images/partners/3.png";
import src4 from "../../../images/partners/4.png";
import src5 from "../../../images/partners/5.png";

const partners = [
  { id: 1, src: src1 },
  { id: 2, src: src2 },
  { id: 3, src: src3 },
  { id: 4, src: src4 },
  { id: 5, src: src5 },
];

const OurPartners = () => {
  return (
    <Container sx={{mt:10 }}>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "medium",
          fontSize: { md: 60, xs: 35 },
          fontFamily: "'Lobster', cursive",
          mb: 2,
        }}
        variant="h2"
      >
        Our Partners
      </Typography>
      <Box sx={{ display: "flex" }}>
        {partners.map((partner) => (
          <Box key={partner.id}>
            <img style={{ width: "100%" }} src={partner.src} alt="" />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default OurPartners;
