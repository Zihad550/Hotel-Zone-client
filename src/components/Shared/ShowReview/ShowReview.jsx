import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ShowReview = ({ review: {
  hotelName,
  securityRate,
  hotelRate,
  userName,
  homeMessage,
  securityMessage,
  hotelImage,
  parentComp,
}  }) => (
    <Grid item xs={12} sm={6} md={4} lg={3}>
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
          image={hotelImage}
          alt="hotel image will be uploaded soon"
          sx={{ fontSize: 30 }}
        />
        <CardContent>
          {parentComp === "MyReviews" ? (
            <Typography variant="h5">{hotelName}</Typography>
          ) : (
            <>
              <Typography gutterBottom variant="h5" component="div">
                {hotelName} reviewed by{" "}
                <Box sx={{ display: "inline-block", color: "blue" }}>
                  {userName}
                </Box>
              </Typography>
            </>
          )}

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


export default ShowReview;
