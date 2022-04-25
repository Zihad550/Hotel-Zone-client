import {
  Button,
  Container,
  Grid,
  InputAdornment,
  InputLabel,
  TextField,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAllContext from "../../../../hooks/useAllContext";
import axios from "../../../../services/http.service";
import Locations from "./Locations/Locations";

const Details = () => {
  // redux datas

  const hotel = useSelector((state) => state.hotel[0]);
  const bookingInfo = useSelector((state) => state.bookingInfo[0]);
  const {
    hotel_name,
    max_photo_url,
    latitude,
    longitude,
    currency_code,
    min_total_price,
  } = hotel;

  // usefirebase datas
  const { user} = useAllContext();
  
  const { adults, children, rooms, checkIn, checkOut } = bookingInfo;
  const [bookingDetails, setBookingDetails] = useState({
    ...bookingInfo,
    min_total_price,
    hotel_name,
  });

  const navigate = useNavigate();

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newDetails = { ...bookingDetails };
    newDetails[field] = value;
    setBookingDetails(newDetails);
  };
  const handleBooking = (e) => {
    e.preventDefault();
    if(user){
      axios.post('/booked', {userName: user.displayName, userEmail: user.email, img: max_photo_url, ...bookingDetails})
      .then(res => {
        if(res.data.insertedId){
          alert('Successfully booked');
          navigate('/dashboard/mybookings');
        }
      })
      
    }else{
      navigate('/login')
    }
    
    
  };

  return (
    <Container sx={{ height: "100vh", mt: { xs: 40, md: 0 } }}>
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
          <Typography variant="h4">Book Hotel</Typography>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <img
              style={{ width: "100%", height: "auto" }}
              src={max_photo_url}
              alt=""
            />
          </Box>
          <form style={{ width: "100%" }} onSubmit={handleBooking}>
            <Box
              sx={{
                display: "flex",
                mb: 1,
                flexDirection: { xs: "column", md: "row" },
              }}
            >
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                overflowY: "scroll",
              }}
            >
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
              value={hotel_name}
            />
            <InputLabel htmlFor="hotel=name">Hotel price</InputLabel>
            <TextField
              onChange={handleBlur}
              fullWidth
              aria-readonly
              id="hotel-name"
              value={min_total_price}
              type="number"
              name="hotelPrice"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {currency_code}
                  </InputAdornment>
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
              value={user ? user.name : ""}
            />
            <InputLabel htmlFor="user-email">Your E-mail</InputLabel>
            <TextField
              onBlur={handleBlur}
              name="userEmail"
              fullWidth
              aria-readonly
              id="user-email"
              value={user ? user.email : ""}
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
        <Grid
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          item
          xs={12}
          md={6}
        >
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <img
              style={{ width: "100%", height: "auto" }}
              src={max_photo_url}
              alt=""
            />
          </Box>
          <Locations
            latitude={latitude}
            longitude={longitude}
            name={hotel_name}
          />{" "}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Details;
