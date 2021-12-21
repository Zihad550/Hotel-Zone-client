import { Box, Typography } from "@mui/material";
import React from "react";
import SearchHotels from "../../SearchHotels/SearchHotels";
import ContactUs from "../../Shared/ContactUs/ContactUs";
import Footer from "../../Shared/Footer/Footer";
import PhotoGellery from "../PhotoGellery/PhotoGellery";
import RecentReviews from "../RecentReviews/RecentReviews";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ mb: 2, fontWeight: "medium" }} variant="h2">
            Welcome to Hotel Zone
          </Typography>
          <Typography sx={{ mb: 5 }} variant="h5">
            Book the best hotel for your stay
          </Typography>
        </Box>

        {/* search hotels */}
        <SearchHotels />
      </Box>

      {/* recent reviews */}
      <RecentReviews />

      {/* contact us */}
      <ContactUs />

      {/* Photo gellery */}
      <PhotoGellery />

      {/* footer container */}
      <Footer />
    </>
  );
};

export default Home;
