import AddIcon from "@mui/icons-material/Add";
import {
  Alert,
  Button,
  Grid,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import axiosInstance from "services/http.service";

const AddNewCity = ({ setDashboardPageTitle }) => {
  // states
  const [cityInfo, setCityInfo] = useState({ rating: 0 });
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setDashboardPageTitle("Add New City");
  }, []);

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...cityInfo };
    newInfo[field] = value;
    setCityInfo(newInfo);
  };

  const handleAddNewCity = (e) => {
    setIsAdded(false);
    e.preventDefault();
    axiosInstance
      .post("https://polar-island-87071.herokuapp.com/cities", {
        ...cityInfo,
        deletable: true,
      })
      .then(({ data }) => data.insertedId && setIsAdded(true));
  };

  return (
    <Grid
      container
      sx={{ alignItems: "center", justifyContent: "center" }}
      spacing={{ md: 2, xs: 1 }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        item
        md={6}
      >
        <Typography variant="h3" sx={{ mt: 3, mb: 1 }}>
          Add New City
        </Typography>
        <form
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
          onSubmit={handleAddNewCity}
        >
          <TextField
            onBlur={handleBlur}
            label="City Name"
            fullWidth
            name="name"
            required
          />
          <TextField
            onBlur={handleBlur}
            label="City image url"
            fullWidth
            margin="normal"
            name="img"
            required
          />
          <TextField
            onBlur={handleBlur}
            required
            placeholder="Available Hotels"
            fullWidth
            margin="dense"
            type="number"
            defaultValue={cityInfo.hotels}
            name="hotels"
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ mt: 2 }} variant="legend">
              Overall rating of hotels in the city
            </Typography>
            <Rating
              value={parseInt(cityInfo.rating)}
              precision={0.1}
              onChange={handleBlur}
              name="rating"
              size="large"
            />
          </Box>
          <Button
            type="submit"
            endIcon={<AddIcon />}
            size="large"
            sx={{ mt: 2 }}
            variant="outlined"
          >
            Add
          </Button>
        </form>
        {isAdded && (
          <Alert severity="success">
            New city successfully added to the UI
          </Alert>
        )}
      </Grid>
    </Grid>
  );
};

export default AddNewCity;
