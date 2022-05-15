import { Container, Grid, Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axiosInstance from "services/http.service";

const RecentReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      setReviews(
        await axiosInstance.get(
          "https://polar-island-87071.herokuapp.com/reviews",
          { signal: controller.signal }
        )
      ).then(({ data }) => data);
    })();

    return () => {
      controller.abort();
    };
  }, []);

  // slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container sx={{ mt: { md: 15, xs: 13 } }}>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "medium",
          mb: { md: 4, xs: 3 },
          fontSize: { xs: 35, md: 60 },
          fontFamily: "'Lobster', cursive",
        }}
        variant="h2"
      >
        Recent Reviews
      </Typography>

      <Slider {...settings}>
        {reviews.map((review) => (
          <Paper key={review._id} elevation={1}>
            <Grid container spacing={2}>
              <Grid sx={{ display: "flex" }} xs={12} sm={6} md={6} item>
                <img
                  style={{ width: "100%", height: "290px" }}
                  src={review.hotelImage}
                  alt=""
                />
              </Grid>
              <Grid xs={12} sm={6} md={6} item>
                <Typography variant="h4">{review.hotelName}</Typography>

                {/* comments */}
                <Grid container>
                  {review.homeMessage && (
                    <Grid item>
                      <Typography variant="h6">About Hotel</Typography>
                      <Typography variant="body1">
                        {review.homeMessage}
                      </Typography>
                    </Grid>
                  )}

                  {review.securityMessage && (
                    <Grid item>
                      <Typography variant="h6">About Hotel Security</Typography>
                      <Typography variant="body1">
                        {review.securityMessage}
                      </Typography>
                    </Grid>
                  )}
                </Grid>

                {/* ratings */}
                <Box
                  sx={{
                    display: "flex",
                    mt: 2,
                  }}
                >
                  <Box sx={{ mr: 5 }}>
                    <Typography component="legend">Hotel Rating</Typography>
                    <Rating value={review.hotelRate} readOnly />
                  </Box>
                  <Box>
                    <Typography component="legend">Security Rating</Typography>
                    <Rating value={review.securityRate} readOnly />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Slider>
    </Container>
  );
};

export default RecentReviews;
