import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

const PhotoGellery = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://polar-island-87071.herokuapp.com/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemstoShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];

  return (
    <Box sx={{ my: 4, mt: 15 }}>
      <Typography
        variant="h2"
        sx={{
          fontWeight: "medium",
          mb: 3,
          fontSize: { xs: 35, md: 60 },
          fontFamily: "'Lobster', cursive",
        }}
        textAlign="center"
        color="initial"
      >
        Our Gallery
      </Typography>
      <Carousel enableAutoPlay autoPlaySpeed={1500} breakPoints={breakPoints}>
        {photos.map((photo) => (
          <Box key={photo._id} sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                transform: "translate(-50%, -50%)",
                top: "50%",
                left: "50%",
                zIndex: 5,
              }}
            >
              <Typography
                sx={{ fontSize: { md: 34, xs: 30 } }}
                color="white"
                variant="h4"
              >
                Picture by: {photo.name}
              </Typography>
              <Typography
                sx={{ fontSize: { md: 24, xs: 20 } }}
                color="white"
                variant="h5"
              >
                While stying at {photo.hotelName}
              </Typography>
            </Box>
            <Box>
              <img className="banner-img" src={photo.src} alt="" />
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default PhotoGellery;
