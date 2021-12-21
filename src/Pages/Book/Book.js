import {
  Button,
  Container,
  Grid,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Locations from "../Locations/Locations";

const Details = () => {
  // usefirebase datas
  const { user } = useAuth();
  console.log(user);
  const { name, price, latitude, longitude, currency } = useParams();
  const details = JSON.parse(localStorage.getItem("details"));
  const { adults, children, rooms, checkIn, checkOut } = details;
  const [bookingDetails, setBookingDetails] = useState({
    ...details,
    price,
    name,
  });
  const navigate = useNavigate();
  console.log(bookingDetails);

  const img = JSON.parse(localStorage.getItem("hotel"));

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newDetails = { ...bookingDetails };
    newDetails[field] = value;
    setBookingDetails(newDetails);
  };
  const handleBooking = (e) => {
    e.preventDefault();
    fetch("https://desolate-thicket-08194.herokuapp.com/booked", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userName: user.displayName,
        userEmail: user.email,
        img,
        ...bookingDetails,
      }),
    })
      .then((res) => res.json())
      .then((data) => data.insertedId && alert("Successfully Booked"));
  };

  return (
    <Container sx={{ height: "100vh" }}>
      <Grid spacing={1} sx={{ height: "100%" }} container>
        <Grid
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
          item
          xs={12}
          md={6}
        >
          <form style={{ width: "100%" }} onSubmit={handleBooking}>
            <Box sx={{ display: "flex", mb: 1 }}>
              <Box sx={{ width: "100%", mr: 2 }}>
                <InputLabel htmlFor="check-in">Select check in date</InputLabel>
                <TextField
                  onBlur={handleBlur}
                  id="check-in"
                  type="date"
                  fullWidth
                  name="checkIn"
                  defaultValue={checkIn}
                />
              </Box>
              <Box sx={{ width: "100%" }}>
                <InputLabel htmlFor="check-out">
                  Select check out date
                </InputLabel>
                <TextField
                  onBlur={handleBlur}
                  id="check-out"
                  type="date"
                  fullWidth
                  name="checkOut"
                  defaultValue={checkOut}
                />
              </Box>
            </Box>

            {/* adults, children and room number fields */}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ width: "100%" }}>
                <InputLabel htmlFor="adults">Number of Adults</InputLabel>
                <TextField
                  onBlur={handleBlur}
                  fullWidth
                  id="adults"
                  defaultValue={adults}
                  type="number"
                  name="adults"
                />
              </Box>
              <Box sx={{ width: "100%", mx: 2 }}>
                <InputLabel htmlFor="childrens">Number of Childrens</InputLabel>
                <TextField
                  onBlur={handleBlur}
                  fullWidth
                  id="childrens"
                  defaultValue={children}
                  type="number"
                  name="children"
                />
              </Box>
              <Box sx={{ width: "100%" }}>
                <InputLabel htmlFor="rooms">Number of Rooms</InputLabel>
                <TextField
                  onBlur={handleBlur}
                  fullWidth
                  id="rooms"
                  defaultValue={rooms}
                  type="number"
                  name="rooms"
                />
              </Box>
            </Box>
            <InputLabel htmlFor="hotel=name">Hotel name</InputLabel>
            <TextField
              onChange={handleBlur}
              fullWidth
              aria-readonly
              id="hotel-name"
              value={name}
            />
            <InputLabel htmlFor="hotel=name">Hotel price</InputLabel>
            <TextField
              onChange={handleBlur}
              fullWidth
              aria-readonly
              id="hotel-name"
              value={price}
              type="number"
              name="hotelPrice"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">{currency}</InputAdornment>
                ),
              }}
            />
            {/* user details */}
            <InputLabel htmlFor="user-name">Your name</InputLabel>
            <TextField
              onBlur={handleBlur}
              name="userName"
              fullWidth
              id="user-name"
              value={user.displayName}
            />
            <InputLabel htmlFor="user-email">Your E-mail</InputLabel>
            <TextField
              onBlur={handleBlur}
              name="userEmail"
              fullWidth
              aria-readonly
              id="user-email"
              value={user?.email}
            />
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              sx={{ width: "100%", mt: 2, fontSize: 18 }}
            >
              Book
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%", height: "auto" }} src={img} alt="" />
          <Locations
            latitude={latitude}
            longitude={longitude}
            name={name}
          />{" "}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Details;
