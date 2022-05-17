import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import BathtubIcon from "@mui/icons-material/Bathtub";
import HotelIcon from "@mui/icons-material/Hotel";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Loader from "components/Shared/Loader";
import React, { useEffect, useState } from "react";
import axiosInstance from "services/http.service";

const BestRooms = () => {
  const [rooms, setRooms] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      setRooms(await axiosInstance.get("/rooms").then((res) => res.data));
    })();

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <Container sx={{ mt: { lg: 0, md: 25, sm: -20, xs: -5 } }}>
      <Typography
        sx={{
          mb: 2,
          fontWeight: "medium",
          fontSize: { xs: 35, md: 60 },
          textAlign: "center",
          fontFamily: "'Lobster', cursive",
        }}
        variant="h2"
      >
        Our Best Rooms
      </Typography>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        {rooms ? (
          rooms.map((room) => (
            <Grid key={room._id} item md={4} xs={12}>
              <Card>
                <Box className="styledImgContainer">
                  <CardMedia
                    component="img"
                    image={room.src}
                    className="responsiveImg styledImg"
                    alt="green iguana"
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {room.name}
                  </Typography>
                  <Box>
                    <IconButton variant="body1">
                      <AspectRatioIcon sx={{ mr: 1 }} />
                      {room.space}
                    </IconButton>
                    <IconButton variant="body1">
                      <HotelIcon sx={{ mr: 1 }} />
                      {room.bed}
                    </IconButton>
                    <IconButton variant="body1">
                      <BathtubIcon sx={{ mr: 1 }} />
                      {room.bathroom}
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Loader />
        )}
      </Grid>
    </Container>
  );
};

export default BestRooms;
