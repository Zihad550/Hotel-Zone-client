import AddIcon from "@mui/icons-material/Add";
import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const AddPhoto = ({ setDashboardPageTitle }) => {
  // states
  const [photoInfo, setPhotoInfo] = useState({
    name: "",
    src: "",
  });
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setDashboardPageTitle("Add New Photo");
  }, []);

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...photoInfo };
    newInfo[field] = value;
    setPhotoInfo(newInfo);
  };

  const handleAddPhoto = (e) => {
    setIsAdded(false);
    e.preventDefault();
    fetch("https://polar-island-87071.herokuapp.com/photos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...photoInfo, deletable: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        data.insertedId && setIsAdded(true);
        setPhotoInfo("");
      });
    e.target.reset();
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
          Add Photo
        </Typography>
        <Typography variant="h5" color="secondary" sx={{ mb: 2 }}>
          to the Photo gellery
        </Typography>

        <form
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
          onSubmit={handleAddPhoto}
        >
          <TextField
            onBlur={handleBlur}
            label="Photo picked by"
            fullWidth
            name="name"
            required
          />

          <TextField
            onBlur={handleBlur}
            label="Photo url"
            fullWidth
            margin="dense"
            name="src"
            required
          />

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
            New photo successfully added to the UI
          </Alert>
        )}
      </Grid>
    </Grid>
  );
};

export default AddPhoto;
