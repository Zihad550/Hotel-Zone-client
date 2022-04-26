import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAllContext from "../../../../hooks/useAllContext";
import axiosInstance from "../../../../services/http.service";
import AlertModal from "../../../Shared/AlertModal/AlertModal";
import Loader from "../../../Shared/Loader/Loader";
import MyBookedHotel from "../MyBookedHotel/MyBookedHotel";

const MyBookings = () => {
  // states
  const [bookedHotels, setBookedHotels] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);
  console.log("here");
  // context
  const { user } = useAllContext();

  useEffect(() => {
    (async () => {
      setBookedHotels(
        await axiosInstance
          .get(`/booked?email${user.email}`)
          .then((res) => res.data)
      );
    })();
  }, [isDeleted, user.email]);

  return (
    <Grid container spacing={{ md: 2, xs: 1 }}>
      {bookedHotels ? (
        bookedHotels.map((hotel) => (
          <MyBookedHotel key={hotel._id} hotel={{ ...hotel, setIsDeleted }} />
        ))
      ) : (
        <Loader />
      )}
      <AlertModal isDeleted={isDeleted} setIsDeleted={setIsDeleted} />
    </Grid>
  );
};

export default MyBookings;
