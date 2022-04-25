import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAllContext from "../../../../hooks/useAllContext";
import AlertModal from "../../../Shared/AlertModal/AlertModal";
import MyBookedHotel from "../MyBookedHotel/MyBookedHotel";

const MyBookings = () => {
  // states
  const [bookedHotels, setBookedHotels] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  // context
  const { user } = useAllContext();

  useEffect(() => {
    fetch(`https://polar-island-87071.herokuapp.com/booked?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setBookedHotels(data));
  }, [isDeleted, user.email]);

  return (
    <Grid container spacing={{ md: 2, xs: 1 }}>
      {bookedHotels.map((hotel) => (
        <MyBookedHotel key={hotel._id} hotel={{ ...hotel, setIsDeleted }} />
      ))}
      <AlertModal isDeleted={isDeleted} setIsDeleted={setIsDeleted} />
    </Grid>
  );
};

export default MyBookings;
