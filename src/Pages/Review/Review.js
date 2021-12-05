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
import { useParams } from "react-router";
import reviewImage from "../../images/review-image.svg";

const Review = () => {
  const { name } = useParams();
  const [securityRate, setSecurityRate] = useState(0);
  const [hotelRate, setHotelRate] = useState(0);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [homeMessage, setHomeMessage] = useState("");
  const [securityMessage, setSecurityMessage] = useState("");

  const handleReview = (e) => {
    e.preventDefault();
    // collect data
    const review = {
      hotelName: name,
      securityRate,
      hotelRate,
      userName,
      userEmail: email,
      homeMessage,
      securityMessage,
    };

    // send to the server
    fetch("https://desolate-thicket-08194.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
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
          <Typography variant="h5">Review {name} </Typography>
          <form onSubmit={handleReview}>
            <TextField
              required
              onBlur={(e) => setUserName(e.target.value)}
              // defaultValue={user.displayName}
              size="small"
              name="userName"
              label="Name"
              fullWidth
              margin="dense"
            />

            <TextField
              required
              // defaultValue={user.email}
              type="email"
              size="small"
              onBlur={(e) => setEmail(e.target.value)}
              label="Email"
              name="email"
              fullWidth
              margin="dense"
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
