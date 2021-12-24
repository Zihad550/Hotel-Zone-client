import {
  Button,
  Container,
  Grid,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import reviewImage from "../../../images/review-image.svg";

const Review = () => {
  const { name } = useParams();
  const { user } = useAuth();
  // hotel state variables
  const [securityRate, setSecurityRate] = useState(0);
  const [hotelRate, setHotelRate] = useState(0);
  const [homeMessage, setHomeMessage] = useState("");
  const [securityMessage, setSecurityMessage] = useState("");

  // redux
  const hotel = useSelector((state) => state.hotel[0]);
  const { max_photo_url } = hotel;

  const handleReview = (e) => {
    e.preventDefault();
    // collect data
    const review = {
      hotelImage: max_photo_url,
      hotelName: name,
      securityRate,
      hotelRate,
      homeMessage,
      securityMessage,
    };

    // send to the server
    fetch("https://polar-island-87071.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userEmail: user.email,
        userName: user.displayName,
        ...review,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Review added successfully");
        }
      });
  };
  return (
    <Container sx={{ height: "100vh" }}>
      <Grid sx={{ alignItems: "center", height: "100%" }} container spacing={1}>
        <Grid item xs={12} md={6}>
          <img src={reviewImage} alt="" />{" "}
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">
            Review{" "}
            <Typography
              sx={{ display: "inline-block" }}
              variant="h5"
              color="secondary"
            >
              {name}
            </Typography>{" "}
          </Typography>
          <form onSubmit={handleReview}>
            <TextField
              required
              // defaultValue={user.displayName}
              size="small"
              name="userName"
              label="Name"
              fullWidth
              margin="dense"
              value={user.displayName}
            />

            <TextField
              required
              // defaultValue={user.email}
              type="email"
              size="small"
              label="Email"
              name="email"
              fullWidth
              margin="dense"
              aria-readonly
              value={user.email}
            />
            <Box sx={{ my: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Typography component="legend">Rate the security</Typography>
                <Rating
                  sx={{ fontSize: 30 }}
                  name="simple-controlled"
                  value={securityRate}
                  onChange={(event, newValue) => {
                    setSecurityRate(newValue);
                  }}
                />{" "}
              </Box>
              <TextField
                multiline
                rows={3}
                onBlur={(e) => setSecurityMessage(e.target.value)}
                size="small"
                fullWidth
                label="Describe more here"
                name="message"
              />
            </Box>
            <Box sx={{ my: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Typography component="legend">Rate the hotel</Typography>
                <Rating
                  sx={{ fontSize: 30 }}
                  name="simple-controlled"
                  value={hotelRate}
                  onChange={(event, newValue) => {
                    setHotelRate(newValue);
                  }}
                />{" "}
              </Box>
              <TextField
                multiline
                rows={3}
                onBlur={(e) => setHomeMessage(e.target.value)}
                size="small"
                fullWidth
                label="Describe more here"
                name="message"
              />
            </Box>

            <Button type="submit" variant="contained" type="submit">
              Send
            </Button>
          </form>{" "}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Review;
