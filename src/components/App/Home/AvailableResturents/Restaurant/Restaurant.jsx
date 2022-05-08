import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router";

const Restaurant = ({
  restaurant: {
    hotel_name,
    address,
    max_photo_url,
    review_score,
    min_total_price,
  },
}) => {
  const rating = review_score / 2;
  const navigate = useNavigate();

  /* handlers */
  const handleGoToBook = () => {
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
            alt={`${hotel_name} restaurant`}
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

export default Restaurant;
