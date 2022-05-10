import { Box } from "@mui/material";
import Footer from "components/Shared/Footer";
import React from "react";
import BestRooms from "./BestRooms";
import HomeBanner from "./HomeBanner";
import HomeBlog from "./HomeBlog";
import OurPartners from "./OurPartners";
import PhotoGallery from "./PhotoGallery";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <HomeBanner />
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
