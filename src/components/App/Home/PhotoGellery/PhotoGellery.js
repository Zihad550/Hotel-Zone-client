import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React, { useCallback, useEffect, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Slider from 'react-slick';

function PhotoGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [photos, setPhotos] = useState([]);
  
  // function to open the lightbox with current photo index
  const openLightbox = useCallback(( index ) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);
  
// close the lightbox
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  // settings for slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 2,
    autoplay: true
  }
  
  // side effect to load images from server
  useEffect(() => {
    fetch("https://polar-island-87071.herokuapp.com/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <Box sx={{mt:15}}>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "medium",
          fontSize: { md: 60, xs: 35 },
          fontFamily: "'Lobster', cursive",
          mb: 3,
        }}
        variant="h2"
      >
        Gallery
      </Typography>
      <Slider {...settings} >
      {photos.map((photo, index) => (
          <Box key={photo._id} onClick={() => openLightbox(index)} sx={{ position: "relative" , cursor:'pointer'}}>
            <Box
              sx={{
                position: "absolute",
                transform: "translate(-50%, -50%)",
                bottom: "0",
                left: "50%",
                zIndex: 5,
              }}
            >
              <Typography
                color="white"
                variant="caption"
              >
                Picture by: {photo.name}
              </Typography>
             
            </Box>
            <Box>
              <img style={{width: `100%`, height: 'auto'}} className="banner-img " src={photo.src} alt="" />
            </Box>
          </Box>
        ))}
        </Slider>
        
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(photo => ({
                ...photo,
                srcset: photo.srcSet,
                caption: photo.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Box>
  );
}

export default PhotoGallery;