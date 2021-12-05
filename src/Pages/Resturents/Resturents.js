import {
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
const Resturents = ({ setHotels }) => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("Finsbury");

  const cities = [
    { value: "Mayfair" },
    { value: "Shadwell" },
    { value: "Finsbury" },
    { value: "Wapping" },
    { value: "Lambeth" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(city);
    setCity("");
  };

  const handleChange = (e) => {
    console.log(e.target);
    setCity(e.target.value);
  };

  useEffect(() => {
    fetch(`https://desolate-thicket-08194.herokuapp.com/hotels/${search}`)
      .then((res) => res.json())
      .then((data) => setHotels(data))
      .catch((err) => {
        console.error(err);
      });
  }, [search]);
  return (
    <Container
      sx={{
        my: 2,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ mb: 2 }} variant="h4">
        Search Hotels
      </Typography>
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <TextField
          select
          onChange={handleChange}
          label="city name"
          fullWidth
          name="city"
          defaultValue="Finsbury"
          value={city}
        >
          {cities.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        {city ? (
          <Button
            sx={{ mt: 2, fontSize: 20 }}
            variant="outlined"
            color="secondary"
            type="submit"
          >
            Search
          </Button>
        ) : (
          <Button
            disabled
            sx={{ mt: 2, fontSize: 20 }}
            variant="outlined"
            color="secondary"
            type="submit"
          >
            Search
          </Button>
        )}
      </form>
    </Container>
  );
};

export default Resturents;
