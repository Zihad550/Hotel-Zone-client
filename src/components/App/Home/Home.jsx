import { Box } from "@mui/material";
import React from "react";
import Footer from "../../Shared/Footer/Footer";
import BestRooms from "./BestRooms/BestRooms";
import Blog from "./Blog/Blog";
import Banner from "./HomeBanner/HomeBanner";
import OurPartners from "./OurPartners/OurPartners";
import PhotoGallery from "./PhotoGallery/PhotoGallery";

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
      <Blog />

      {/* Photo gellery */}
      <PhotoGallery />

      {/* footer container */}
      <Footer />
    </>
  );
};

export default Home;
