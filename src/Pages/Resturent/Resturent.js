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

const Resturent = ({ resturent, images }) => {
  const {
    name,
    address,
    optimizedThumbUrls,
    ratePlan,
    guestReviews,
    coordinate,
  } = resturent;
  localStorage.setItem("hotel", JSON.stringify(optimizedThumbUrls.srpDesktop));
  const rating = guestReviews.unformattedRating / 2;
  const navigate = useNavigate();

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
            image={optimizedThumbUrls.srpDesktop}
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
              {name}
            </Typography>
            <Typography variant="body1">
              Address: {address.streetAddress}
            </Typography>

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
                Price: {ratePlan.price.exactCurrent} {"USD"}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: "auto", height: "100%", fontSize: 17 }}
                onClick={() =>
                  navigate(
                    `/book/${name}/${ratePlan.price.exactCurrent}/${coordinate.lat}/${coordinate.lon}/USD`
                  )
                }
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
