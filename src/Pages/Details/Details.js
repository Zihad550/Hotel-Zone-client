import { Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Locations from "../Locations/Locations";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState({});
  console.log(id);
  useEffect(() => {
    fetch(`https://desolate-thicket-08194.herokuapp.com/hotels/hotel/${id}`)
      .then((res) => res.json())
      .then((data) => setHotel(data))
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const { name, caption, city, latitude, longitude } = hotel;
  return (
    <Container sx={{ height: "100vh" }}>
      <Grid sx={{ height: "100%" }} container>
        <Grid
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
          item
          xs={12}
          md={6}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="hotel image will be uploaded soon"
              sx={{ fontSize: 30 }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {caption}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => navigate(`/review/${name}`)}
                sx={{ width: "100%", fontSize: 18 }}
                variant="outlined"
              >
                Give Review
              </Button>
            </CardActions>
          </Card>{" "}
        </Grid>
        <Grid item xs={12} md={6}>
          <Locations latitude={latitude} longitude={longitude} name={name} />{" "}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Details;
