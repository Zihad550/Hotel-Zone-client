import { Box, Container, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

const RecentReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://desolate-thicket-08194.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemstoShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <Container sx={{ my: 5 }}>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "medium",
          mb: { md: 4, xs: 0 },
          mt: { xs: 30 },
          fontSize: { xs: 35, md: 60 },
        }}
        variant="h2"
      >
        Recent Reviews
      </Typography>
      <Carousel breakPoints={breakPoints}>
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
      </Carousel>
    </Container>
  );
};

export default RecentReviews;
