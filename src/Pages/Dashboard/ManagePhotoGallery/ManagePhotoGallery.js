import { Button, Container, Paper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ManagePhotoGallery = () => {
  const navigate = useNavigate();
  return (
    <Container
      sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
    >
      <Paper
        onClick={() => navigate("/dashboard/addPhoto")}
        sx={{
          width: "300px",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          mb: { xs: 5, md: 0 },
        }}
        elevation={3}
      >
        <Button sx={{ fontSize: 30 }} color="secondary">
          Add New Photo
        </Button>
      </Paper>
      <Paper
        onClick={() => navigate("/dashboard/manageExistingPhoto")}
        sx={{
          width: "300px",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          ml: { md: 10, xs: 0 },
        }}
        elevation={3}
      >
        <Button sx={{ fontSize: 28 }} color="secondary">
          Manage Existing photos
        </Button>
      </Paper>
    </Container>
  );
};

export default ManagePhotoGallery;
