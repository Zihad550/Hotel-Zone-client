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
import React, { useEffect, useState } from "react";

const BestRooms = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("https://polar-island-87071.herokuapp.com/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);
  return (
    <Container sx={{ mt: { md: 28, lg: 15, xs: 30 } }}>
      <Typography
        sx={{
          mb: 2,
          fontWeight: "medium",
          fontSize: { xs: 35, md: 60 },
          textAlign: "center",
        }}
        variant="h2"
      >
        Our Best Rooms
      </Typography>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        {rooms.map((room) => (
          <Grid item md={4} xs={12}>
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
        ))}
      </Grid>
    </Container>
  );
};

export default BestRooms;
