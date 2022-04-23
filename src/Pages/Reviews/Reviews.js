import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Banner from '../../components/Banner.jsx';
import src from '../../images/reviews/reviews-banner.jpg';
import Footer from '../Shared/Footer/Footer';
import ShowReview from "../ShowReview/ShowReview";
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
    <Container sx={{mt:5}}>
      
      <Grid container spacing={3}>
        {reviews.map((review) => (
          <ShowReview key={review._id} review={review} />
        ))}
      </Grid>
    </Container>

    {/* footer */}
    <Footer/>
   </>
  );
};

export default Reviews;
