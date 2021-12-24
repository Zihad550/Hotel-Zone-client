import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import ShowReview from "../../ShowReview/ShowReview";

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
  console.log(user.email);
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
