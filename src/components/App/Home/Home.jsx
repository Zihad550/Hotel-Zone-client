import { Box } from "@mui/material";
import Footer from "components/Shared/Footer";
import React from "react";
import BestRooms from "./BestRooms";
import Banner from "./HomeBanner";
import HomeBlog from "./HomeBlog/HomeBlog";
import OurPartners from "./OurPartners";
import PhotoGallery from "./PhotoGallery";

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
        <Banner />
      </Box>

      {/* best rooms */}
      <BestRooms />

      {/* our partners */}
      <OurPartners />

      {/* our blog */}
      <HomeBlog />

      {/* Photo gellery */}
      <PhotoGallery />

      {/* footer container */}
      <Footer />
    </>
  );
};

export default Home;
