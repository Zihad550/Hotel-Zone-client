import { Box } from "@mui/material";
import React from "react";
import ContactUs from "../../Shared/ContactUs/ContactUs";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import BestRooms from "../BestRooms/BestRooms";
import PhotoGellery from "../PhotoGellery/PhotoGellery";
import RecentReviews from "../RecentReviews/RecentReviews";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          height: { xs: "100vh", lg: "100vh", md: "50vh" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              mb: 2,
              fontWeight: "medium",
              mt: { xs: 32 },
              fontSize: { xs: 35, md: 60 },
            }}
            variant="h2"
          >
            Welcome to Hotel Zone
          </Typography>
          <Typography
            sx={{ mb: { md: 5, xs: 2 }, fontSize: { xs: 20 } }}
            variant="h5"
          >
            Book the best hotel for your stay
          </Typography>
        </Box> */}

        {/* search hotels */}
        {/* <SearchHotels /> */}
        <Banner />
      </Box>

      {/* best rooms */}
      <BestRooms />

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
