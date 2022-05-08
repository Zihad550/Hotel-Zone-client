import { Grid } from "@mui/material";
import Loader from "components/Shared/Loader/Loader";
import Toast from "components/Shared/Toasts/Toast";
import useAllContext from "hooks/useAllContext";
import React, { useEffect, useState } from "react";
import axiosInstance from "services/http.service";
import MyBookedHotel from "./MyBookedHotel";

const MyBookings = () => {
  // states
  const [bookedHotels, setBookedHotels] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  // context
  const { user } = useAllContext();

  useEffect(() => {
    (async () => {
      setRefresh(false);
      setIsDeleted(false);
      setBookedHotels(
        await axiosInstance
          .get(`/booked?email${user.email}`)
          .then((res) => res.data)
      );
    })();
  }, [refresh, user.email]);

  return (
    <Grid container spacing={{ md: 2, xs: 1 }}>
      {bookedHotels ? (
        bookedHotels.map((hotel) => (
          <MyBookedHotel
            key={hotel._id}
            hotel={hotel}
            setRefresh={setRefresh}
            setIsDeleted={setIsDeleted}
          />
        ))
      ) : (
        <Loader />
      )}

      {/* alerts */}
      {isDeleted && (
        <Toast
          severity="success"
          message="Successful"
          setShowToast={setIsDeleted}
        />
      )}
    </Grid>
  );
};

export default MyBookings;
