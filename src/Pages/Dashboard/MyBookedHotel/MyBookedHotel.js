import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const MyBookedHotel = ({ hotel }) => {
  const navigate = useNavigate();
  const { name, price, img, email, _id, setIsDeleted } = hotel;

  const handleCancelBook = () => {
    if (window.confirm("Are you sure")) {
      fetch(`https://desolate-thicket-08194.herokuapp.com/booked?id=${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("successfully deleted");
            setIsDeleted(true);
          }
        });
    }
  };
  return (
    <Grid item md={4} lg={3}>
      <Card>
        <CardMedia height="280px" component="img" image={img} alt={name} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: {price}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              mt: "auto",
            }}
          >
            <Button
              variant="contained"
              onClick={() => navigate(`/dashboard/review/${name}`)}
            >
              Give Review
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleCancelBook}
            >
              Cancel Book
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Grid>
  );
};

export default MyBookedHotel;
