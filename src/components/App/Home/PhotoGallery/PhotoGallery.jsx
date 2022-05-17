import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Loader from "components/Shared/Loader";
import React, { useCallback, useEffect, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Slider from "react-slick";
import axiosInstance from "services/http.service";

const PhotoGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [photos, setPhotos] = useState(null);

  // function to open the lightbox with current photo index
  const openLightbox = useCallback((index) => {
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
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // side effect to load images from server
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      setPhotos(
        await axiosInstance
          .get("/photos", { signal: controller.signal })
          .then((res) => res.data)
      );
    })();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Box sx={{ mt: 15 }}>
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
      {photos ? (
        <Slider {...settings}>
          {photos.map((photo, index) => (
            <Box
              key={photo._id}
              onClick={() => openLightbox(index)}
              sx={{
                position: "relative",
                cursor: "pointer",
                height: { md: "300px", xs: "200px" },
                background: `url(${photo.src}) no-repeat center`,
                backgroundSize: "cover",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                  bottom: "0",
                  left: "50%",
                  zIndex: 5,
                }}
              >
                <Typography color="white" variant="caption">
                  Picture by: {photo.name}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      ) : (
        <Loader />
      )}

      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((photo) => ({
                ...photo,
                srcset: photo.srcSet,
                caption: photo.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Box>
  );
};

export default PhotoGallery;
