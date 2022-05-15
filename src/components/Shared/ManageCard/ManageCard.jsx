import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import axiosInstance from "services/http.service";

const ManageCard = ({
  prop: { img, name, _id, setIsDeleted, src, setShowAlert },
  route,
}) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure!")) {
      axiosInstance
        .delete(`https://polar-island-87071.herokuapp.com/${route}?id=${_id}`)
        .then(({ data }) => {
          data.deletedCount > 0 && setIsDeleted(true);
          data.deletedCount === 0 && setShowAlert(true);
        });
    }
  };
  return (
    <Grid item md={4} lg={3}>
      <Card>
        <CardMedia component="img" image={img || src} />
        <CardContent>
          <Typography variant="h4">{name}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleDelete} color="error" variant="contained">
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ManageCard;
