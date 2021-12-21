import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

const PhotoGellery = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("./places.json")
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
    <Box sx={{ my: 4 }}>
      <Typography
        variant="h2"
        sx={{ fontWeight: "medium", mb: 3 }}
        textAlign="center"
        color="initial"
      >
        Our Gallery
      </Typography>
      <Carousel breakPoints={breakPoints}>
        {photos.map((photo) => (
          <Box>
            <img height="500px" src={photo.src} alt="" />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default PhotoGellery;
