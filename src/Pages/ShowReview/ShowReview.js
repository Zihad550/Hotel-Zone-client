import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ShowReview = ({ review }) => {
  const {
    hotelName,
    caption,
    city,
    securityRate,
    hotelRate,
    userName,
    userEmail,
    homeMessage,
    securityMessage,
  } = review;
  return (
    <Grid item xs={6} md={4}>
      <Card
        sx={{
          height: "100%",
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="hotel image will be uploaded soon"
          sx={{ fontSize: 30 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {hotelName} reviewed by{" "}
            <Box sx={{ display: "inline-block", color: "blue" }}>
              {userName}
            </Box>
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Located at: {city}
          </Typography>
          {securityMessage && (
            <>
              <Typography variant="body1">About Security </Typography>
              <Typography variant="body2" color="text.secondary">
                {securityMessage}
              </Typography>{" "}
            </>
          )}
          {homeMessage && (
            <>
              <Typography variant="body1">About hotel </Typography>
              <Typography variant="body2" color="text.secondary">
                {homeMessage}
              </Typography>{" "}
            </>
          )}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Box>
              <Typography component="legend">Hotel rating</Typography>
              <Rating readOnly value={hotelRate} />
            </Box>
            <Box>
              <Typography component="legend">Security rating</Typography>
              <Rating readOnly value={securityRate} />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ShowReview;
