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
    { width: 550, itemstoShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];
  console.log(reviews);
  return (
    <Container sx={{ my: 5 }}>
      <Typography
        sx={{ textAlign: "center", fontWeight: "medium", mb: 4 }}
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
                left: "54%",
                zIndex: 5,
              }}
            >
              <Typography
                sx={{ width: "80%", fontSize: 28 }}
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
              <Typography color="white" variant="h6">
                About the hotel:
                <Box
                  component="p"
                  sx={{ display: "inline-block", ml: 1 }}
                  variant="body2"
                  color="white"
                >
                  {review.homeMessage}
                </Box>
              </Typography>
              <Typography color="white" variant="h6">
                About the security:
                <Box
                  component="span"
                  sx={{ display: "inline-block", ml: 1 }}
                  variant="body2"
                  color="white"
                >
                  {review.securityMessage}
                </Box>
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                  mt: 4,
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="legend">Hotel Ratings</Typography>
                  <Rating
                    precision={0.5}
                    defaultValue={parseInt(review.hotelRate)}
                    readOnly
                  ></Rating>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", ml: 5 }}>
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
