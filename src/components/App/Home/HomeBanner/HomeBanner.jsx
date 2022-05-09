import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Loader from "components/Shared/Loader";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axiosInstance from "services/http.service";
import BannerArrow from "./BannerArrow";
import SearchHotels from "./SearchHotels";

const Banner = () => {
  const [cities, setCities] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await axiosInstance.get("/cities");
      setCities(res.data);
    })();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <BannerArrow icon={<ArrowForwardIosIcon />} position="right" />,
    prevArrow: <BannerArrow icon={<ArrowBackIosNewIcon />} position="left" />,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 0,
        settings: {
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };
  return cities ? (
    <Box
      sx={{ position: "relative", mt: { lg: -35, md: 0, sm: -55, xs: -55 } }}
    >
      <Slider {...settings}>
        {cities.map((city) => (
          <Box
            sx={{
              background: `url(${city.img}) no-repeat center`,
              backgroundSize: "cover",
              height: { lg: "800px", md: "800px", sm: "70vh", xs: "100vh" },
              width: "100vw",
              zIndex: 10,
            }}
            key={city._id}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                flexDirection: "column",
                mt: { xs: 15, sm: 0 },
              }}
            >
              <Typography color="white" variant="h3">
                {city.name}
              </Typography>
              <Typography color="white" variant="h5">
                Available Hotels {city.hotels}
              </Typography>

              <Box
                sx={{ display: "flex", alignItems: "center", color: "white" }}
              >
                <Typography variant="legend">Overall Ratings</Typography>
                <Rating
                  precision={0.5}
                  defaultValue={parseInt(city.rating)}
                  readOnly
                ></Rating>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>

      {/* search component */}
      <SearchHotels />
    </Box>
  ) : (
    <Loader />
  );
};

export default Banner;
