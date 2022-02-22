import SearchIcon from "@mui/icons-material/Search";
import { Alert, Button, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchHotels = () => {
  const [cities, setCities] = useState([]);
  const [cityName, setCityName] = useState("");
  const [updatedName, setUpdatedName] = useState("");
  const [city, setCity] = useState({});
  const [again, setAgain] = useState(false);

  const navigate = useNavigate();

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemstoShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 },
  ];

  useEffect(() => {
    fetch("https://polar-island-87071.herokuapp.com/cities")
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, []);

  /* useEffect(() => {
    updatedName &&
      fetch(
        `https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-gb&name=${updatedName}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "booking-com.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => setCity(data[0]));
  }, [updatedName]); */

  const handleSearch = () => {
    setUpdatedName(cityName);

    if (city?.dest_id) {
      navigate(
        `/AvailableResturents/${city?.dest_id}/${city?.latitude}/${city?.longitude}`
      );

      setCityName("");
    } else {
      setAgain(true);
    }
  };

  return (
    <Paper
      elevation={1}
      sx={{
        width: { lg: "40%", xs: "75%" },
        mx: "auto",
        mt: -15,
        zIndex: 10,
        position: "relative",
        pb: 1,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{ fontSize: { xs: 30 }, mt: { xs: 5 }, pt: 1 }}
          variant="h2"
        >
          Enter the city name
        </Typography>
        <Typography sx={{ mb: 3 }} variant="body1">
          Where you want to book hotel
        </Typography>
      </Box>

      <Box sx={{ mx: 5 }}>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <TextField
            variant="outlined"
            onBlur={(e) => setCityName(e.target.value)}
            label="Enter City Name"
            fullWidth
          />
          <Button
            onClick={handleSearch}
            endIcon={<SearchIcon />}
            sx={{ fontSize: 18, px: 5 }}
            variant="contained"
            color="secondary"
          >
            Search
          </Button>
        </Box>
        <Box sx={{ my: 1 }}>
          {again && <Alert severity="info">Click again</Alert>}
        </Box>
      </Box>
    </Paper>
  );
};

export default SearchHotels;
