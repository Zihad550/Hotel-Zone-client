import SearchIcon from "@mui/icons-material/Search";
import {
  Alert,
  Button,
  Grid,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import { useNavigate } from "react-router-dom";

const SearchHotels = () => {
  const [cities, setCities] = useState([]);
  const [cityName, setCityName] = useState("");
  const [updatedName, setUpdatedName] = useState("");
  const [city, setCity] = useState({});
  const [again, setAgain] = useState(false);
  console.log(city);

  const navigate = useNavigate();

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemstoShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 },
  ];

  useEffect(() => {
    fetch("https://desolate-thicket-08194.herokuapp.com/cities")
      .then((res) => res.json())
      .then((data) => setCities(data));
  });

  useEffect(() => {
    updatedName &&
      fetch(
        `https://hotels4.p.rapidapi.com/locations/v2/search?query=${updatedName}&locale=en_US&currency=USD`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "hotels4.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => setCity(data.suggestions[0].entities[0]));
  }, [updatedName]);

  const handleSearch = () => {
    setUpdatedName(cityName);

    if (city?.destinationId) {
      navigate(
        `/AvailableResturents/${city?.destinationId}/${city?.latitude}/${city?.longitude}`
      );

      setCityName("");
    } else {
      setAgain(true);
    }
  };

  return (
    <Grid
      container
      sx={{ alignItems: { xs: "center" } }}
      spacing={{ md: 2, sm: 1 }}
    >
      <Grid
        item
        md={4}
        xs={12}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center" },
            mx: "auto",
            width: "100%",
            mx: 2,
          }}
        >
          <Typography sx={{ fontSize: { xs: 30 }, mt: { xs: 5 } }} variant="h2">
            Enter the city name
          </Typography>
          <Typography sx={{ mb: 3 }} variant="body1">
            Where you want to book hotel
          </Typography>

          <TextField
            variant="outlined"
            onBlur={(e) => setCityName(e.target.value)}
            label="Enter City Name"
            fullWidth
          />
          <Button
            onClick={handleSearch}
            endIcon={<SearchIcon />}
            sx={{ fontSize: 18, width: { xs: "100%" } }}
            variant="contained"
            color="secondary"
          >
            Search
          </Button>
          {again && <Alert severity="info">Click again</Alert>}
        </Box>
      </Grid>
      <Grid item md={8} xs={12}>
        <Typography
          color="primary"
          variant="h4"
          sx={{ textAlign: "center", mb: 1, mt: { xs: 5 } }}
        >
          Popular cities to travel
        </Typography>
        <Carousel breakPoints={breakPoints}>
          {cities.map((city) => (
            <Box key={city._id} sx={{ position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                  top: "50%",
                  left: "50%",
                  zIndex: 5,
                }}
              >
                <Typography color="white" variant="h4">
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
              <Box>
                <img className="banner-img" src={city.img} alt="" />
              </Box>
            </Box>
          ))}
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default SearchHotels;
