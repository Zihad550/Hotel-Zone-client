import { Grid } from "@mui/material";
import ShowReview from "components/Shared/ShowReview/ShowReview";
import useAuth from "hooks/useAuth";
import React, { useEffect, useState } from "react";

const MyReviews = () => {
  const [myReviews, setMyReviews] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(
      `https://polar-island-87071.herokuapp.com/reviews/review?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user.email]);
  return (
    <Grid container spacing={{ md: 2, xs: 1 }}>
      {myReviews.map((review) => (
        <ShowReview
          key={review._id}
          review={{ ...review, parentComp: "MyReviews" }}
        />
      ))}
    </Grid>
  );
};

export default MyReviews;
