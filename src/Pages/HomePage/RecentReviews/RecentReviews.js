import { Container, Grid, Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const RecentReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://polar-island-87071.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    // autoplay: true,
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

      {/* email: "hussainmuzahid83@gmail.com"
homeMessage: ""
hotelImage: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/105716224.jpg?k=25b1fdb40fdede66a2afcce439d455021d7a2c262b713a96736d97a11fa5d78e&o="
hotelName: "Park Plaza London Riverbank"
hotelRate: 5
securityMessage: ""
securityRate: 5
userEmail: "hussainmuzahid83@gmail.com"
userName: "" */}
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

      {/* <Carousel enableAutoPlay autoPlaySpeed={1500} breakPoints={breakPoints}>
        {reviews.map((review) => (
          <Box key={review._id} sx={{ position: "relative", m: 5 }}>
            <Box
              sx={{
                position: "absolute",
                transform: "translate(-50%, -50%)",
                top: "50%",
                left: { md: "56%", sm: "54%", xs: "56%" },
                zIndex: 5,
              }}
            >
              <Typography
                sx={{
                  width: { md: "75%", xs: "60%" },
                  fontSize: { sm: 28, xs: 15 },
                }}
                color="white"
                variant="h5"
              >
                {review.hotelName} reviewed by
                <Box
                  sx={{ display: "inline-block", ml: 1 }}
                  component="div"
                  variant="h5"
                  color="secondary"
                >
                  {review.userName}
                </Box>
              </Typography>
              {review.homeMessage && (
                <Typography
                  sx={{
                    fontSize: { sm: 20, xs: 12 },
                    mt: { xs: 1, md: 0 },
                  }}
                  color="white"
                  variant="h6"
                >
                  About the hotel:
                  <Box
                    component="p"
                    sx={{
                      display: { xs: "block", md: "inline-block" },
                      ml: 1,
                      fontSize: { sm: 20, xs: 10 },
                      width: { sm: "90%", xs: "60%" },
                      mt: { xs: 0 },
                    }}
                    variant="body2"
                    color="white"
                  >
                    {review.homeMessage}
                  </Box>
                </Typography>
              )}
              {review.securityMessage && (
                <Typography
                  sx={{ fontSize: { sm: 18, xs: 12 } }}
                  color="white"
                  variant="h6"
                >
                  About the security:
                  <Box
                    component="span"
                    sx={{
                      display: { md: "inline-block", xs: "block" },
                      ml: 1,
                      fontSize: { sm: 18, xs: 10 },
                      width: { sm: "90%", xs: "60%" },
                    }}
                    variant="body2"
                    color="white"
                  >
                    {review.securityMessage}
                  </Box>
                </Typography>
              )}

              <Box
                sx={{
                  display: "flex",
                  alignItems: { sm: "center", xs: "flex-start" },
                  color: "white",
                  mt: 4,
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="legend">Hotel Ratings</Typography>
                  <Rating
                    precision={0.5}
                    defaultValue={parseInt(review.hotelRate)}
                    readOnly
                  ></Rating>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    ml: { sm: 5, xs: 0 },
                  }}
                >
                  <Typography variant="legend">Security Ratings</Typography>
                  <Rating
                    precision={0.5}
                    defaultValue={parseInt(review.securityRate)}
                    readOnly
                  ></Rating>
                </Box>
              </Box>
            </Box>
            <Box sx={{ height: "500px" }}>
              <img className="banner-img" src={review.hotelImage} alt="" />
            </Box>
          </Box>
        ))}
      </Carousel> */}
    </Container>
  );
};

export default RecentReviews;
