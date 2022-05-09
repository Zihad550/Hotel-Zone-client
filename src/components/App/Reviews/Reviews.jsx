import { Container, Grid } from "@mui/material";
import src from "assets/images/reviews/reviews-banner.jpg";
import Banner from "components/Banner.jsx";
import Footer from "components/Shared/Footer";
import ShowReview from "components/Shared/ShowReview";
import React, { useEffect, useState } from "react";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://polar-island-87071.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <>
      {/* banner */}
      <Banner src={src} title="Reviews" />
      {/* body */}
      <Container sx={{ mt: 5 }}>
        <Grid container spacing={3}>
          {reviews.map((review) => (
            <ShowReview key={review._id} review={review} />
          ))}
        </Grid>
      </Container>

      {/* footer */}
      <Footer />
    </>
  );
};

export default Reviews;
