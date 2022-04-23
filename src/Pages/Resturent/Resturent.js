import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addHotel } from "../../redux/actions/hotelActions";
import { addBookingInfo } from "../../redux/actions/hotelBookingActions";

const Resturent = ({ resturent, bookingInfo }) => {
  const {
    hotel_name,
    address,
    max_photo_url,
    review_score,
    min_total_price,
  } = resturent;
  const rating = review_score / 2;
  const navigate = useNavigate();

  /* redux hooks */
  const dispatch = useDispatch();

  /* handlers */
  const handleGoToBook = () => {
    dispatch(addHotel(resturent));
    dispatch(addBookingInfo(bookingInfo));
    navigate(`/book`);
  };

  return (
    <Card
      sx={{
        my: 1,
        display: "flex",
        flexDirection: { sm: "row", xs: "column" },
      }}
    >
      <Grid container spacing={2}>
        <Grid item md={6} sm={6} xs={12}>
          <CardMedia
            component="img"
            height="auto"
            width="100%"
            image={max_photo_url}
            alt="green iguana"
          />
        </Grid>
        <Grid sx={{ height: "100%" }} item md={6} sm={6} xs={12}>
          <CardContent
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4" component="div">
              {hotel_name}
            </Typography>
            <Typography variant="body1">Address: {address}</Typography>

            {/* hotel rating */}
            <Box sx={{ display: "flex", my: 1 }}>
              <Typography sx={{ mr: 1 }} variant="legend">
                Hotel rating
              </Typography>
              <Rating
                defaultValue={parseInt(rating)}
                readOnly
                precision={0.1}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography color="success.dark" variant="h6">
                Price: {min_total_price} {"USD"}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleGoToBook}
                sx={{ mt: "auto", height: "100%", fontSize: 17 }}
                /*  onClick={() =>
                  navigate(
                    `/book/${hotel_name}/${min_total_price}/${latitude}/${longitude}/${currency_code}`
                  )
                } */
              >
                Book
              </Button>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Resturent;
