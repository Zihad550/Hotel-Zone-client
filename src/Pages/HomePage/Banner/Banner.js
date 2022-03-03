import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SearchHotels from "../../SearchHotels/SearchHotels";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      sx={{
        background: "violet",
        zIndex: "10",
        position: "absolute",
        right: 0,
        bottom: "50%",
        padding: "10px",
        borderTopLeftRadius: "50px",
        borderBottomLeftRadius: "50px",
        cursor: "pointer",
        color: "white",
      }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon />
    </Box>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      sx={{
        background: "violet",
        zIndex: "10",
        position: "absolute",
        left: 0,
        bottom: " 50%",
        padding: "10px",
        borderTopRightRadius: "50px",
        borderBottomRightRadius: "50px",
        cursor: "pointer",
        color: "white",
      }}
      onClick={onClick}
    >
      <ArrowBackIosNewIcon />
    </Box>
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
    // autoplay: true,
  };
  return (
    <Box
      sx={{ position: "relative", mt: { lg: -35, md: 0, sm: -55, xs: -55 } }}
    >
      <Slider {...settings}>
        {cities.map((city) => (
          <Box
            sx={{
              background: `url(${city.img}) no-repeat center`,
              backgroundSize: "cover",
              height: { lg: "80vh", md: "100vh", xs: "70vh" },
              width: "100vw",
              zIndex:10
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
