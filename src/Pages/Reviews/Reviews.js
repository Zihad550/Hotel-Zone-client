import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ShowReview from "../ShowReview/ShowReview";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://desolate-thicket-08194.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  });
  return (
    <Container sx={{ mb: 3, mt: 15 }}>
      <Typography
        sx={{ textAlign: "center", mb: 2 }}
        variant="h3"
        color="primary"
      >
        Reviews{" "}
      </Typography>
      <Grid container spacing={3}>
        {reviews.map((review) => (
          <ShowReview key={review._id} review={review} />
        ))}
      </Grid>
    </Container>
  );
};

export default Reviews;
