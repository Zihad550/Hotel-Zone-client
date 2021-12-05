import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const Resturent = ({ resturent }) => {
  const { name, _id } = resturent;
  const navigate = useNavigate();
  return (
    <Card sx={{ minWidth: 275, my: 1 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="text"
          color="primary"
          onClick={() => navigate(`/details/${_id}`)}
        >
          See details
        </Button>
      </CardActions>
    </Card>
  );
};

export default Resturent;
