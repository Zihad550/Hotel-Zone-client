import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import MyBookedHotel from "../MyBookedHotel/MyBookedHotel";

const MyBookings = () => {
  const [bookedHotels, setBookedHotels] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    fetch(
      `https://desolate-thicket-08194.herokuapp.com/booked?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setBookedHotels(data));
  }, [user.email]);

  return (
    <Grid container spacing={{ md: 2, xs: 1 }}>
      {bookedHotels.map((hotel) => (
        <MyBookedHotel key={hotel.hotel_id} hotel={hotel} />
      ))}
    </Grid>
  );
};

export default MyBookings;
