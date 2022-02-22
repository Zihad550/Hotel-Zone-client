import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SearchHotels from "../../SearchHotels/SearchHotels";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IconButton
      sx={{
        background: "red",
        zIndex: "10",
        position: "absolute",
        left: 0,
        bottom: 0,
        padding: "10px",
      }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IconButton
      sx={{
        background: "red",
        zIndex: "10",
        position: "absolute",
        left: "50px",
        bottom: 0,
        padding: "10px",
      }}
      onClick={onClick}
    >
      <ArrowBackIosNewIcon />
    </IconButton>
  );
}

const Banner = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("https://polar-island-87071.herokuapp.com/cities")
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, []);
  console.log(cities);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Box sx={{ position: "relative" }}>
      <Slider {...settings}>
        {cities.map((city) => (
          <Box
            sx={{
              backgroundImage: `url(${city.img})`,
              backgroundSize: "cover",

              backgroundRepeat: "no-repeat",
              height: "100vh",
              width: "100vw",
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
  );
};

export default Banner;
