import SearchIcon from "@mui/icons-material/Search";
import { Alert, Button, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchHotels = () => {
  // states
  const [cityName, setCityName] = useState("");
  const [city, setCity] = useState({});
  const [searching, setSearching] = useState(false);
  console.log(cityName)

  // react router hooks
  const navigate = useNavigate();

  // handlers
  const  handleSearch = async () => {
    setSearching(true);
    const res = await fetch(
        `https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-gb&name=${cityName}`,
        {
          headers: {
            "x-rapidapi-host": "booking-com.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
          },
        }
      )
      
        const data = await res.json();
        setCity(data[0])
        if(data[0].hotels > 0){
          setSearching(false)
          setCity(data[0])
          const {dest_id, latitude, longitude} = data[0];
          navigate(
            `/AvailableResturents/${dest_id}/${latitude}/${longitude}`
          );
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
            flexDirection: {xs: 'column', md: 'row'}
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
            disabled={searching}
          >
            Search
          </Button>
        </Box>
        <Box sx={{ my: 1 }}>
          {searching && <Alert severity="info">Searching...</Alert>}
        </Box>
      </Box>
    </Paper>
  );
};

export default SearchHotels;
