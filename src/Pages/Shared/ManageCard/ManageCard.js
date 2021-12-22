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

const ShowCity = ({ prop, route }) => {
  const { img, name, _id, setIsDeleted, src } = prop;
  console.log(prop);

  const handleDelete = () => {
    if (window.confirm("Are you sure!")) {
      fetch(`https://desolate-thicket-08194.herokuapp.com/${route}?id=${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          data.deletedCount > 0 && setIsDeleted(true);
        });
    }
  };
  return (
    <Grid item md={4} lg={3}>
      <Card>
        {/* {img ? (
          <CardMedia component="img" image={img} />
        ) : (
          <CardMedia component="img" image={src} />
        )} */}
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

export default ShowCity;
